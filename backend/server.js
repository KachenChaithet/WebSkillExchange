import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import user from './routers/user.router.js'
import friend from './routers/friend.router.js'
import message from './routers/message.router.js'
import { clerkMiddleware } from '@clerk/express'
import { PrismaClient } from '@prisma/client'
import { initSocket } from './sockets/index.js'

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


// socket
const server = createServer(app)
initSocket(server)



server.listen(port, () => {
    console.log('server run on http://localhost:' + port);
    console.log('ws ready ws://localhost:' + port);

})