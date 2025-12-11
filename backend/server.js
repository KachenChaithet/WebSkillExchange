import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import dotenv from 'dotenv'
import user from './routers/user.router.js'
import friend from './routers/friend.router.js'
import message from './routers/message.router.js'
import { clerkMiddleware } from '@clerk/express'
import { PrismaClient } from '@prisma/client'
import { initSocket } from './sockets/index.js'
import multer from 'multer'
import path from 'path'
import fs from 'fs'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null, fileName)
        req.on('aborted', () => {
            // delete file that not successfully
            const fullPaht = path.join('uploads/', fileName)
            fs.unlinkSync(fullPaht)
        })
    }
})
const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg') {
            cb(null, true)
        } else {
            cb(new Error('not allow other file without image/png'), false)
        }
    }
})



const prisma = new PrismaClient()
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))
const port = process.env.PORT || 5000

app.use(clerkMiddleware())



// user
app.use('/', user)

// friends
app.use('/friends', friend)

// messages
app.use('/message', message)

app.post('/upload', (req, res) => {
    upload.array('test')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: err.message })
        }
        res.json({ message: 'upload success' })

    })
})


// socket
const server = createServer(app)
initSocket(server)



server.listen(port, () => {
    console.log('server run on http://localhost:' + port);
    console.log('ws ready ws://localhost:' + port);

})  