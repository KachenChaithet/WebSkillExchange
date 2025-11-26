import express from 'express'
import cors from 'cors'
import { WebSocketServer } from 'ws'
import { createServer } from 'http'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

const server = createServer(app)
const wss = new WebSocketServer({ server })
import { PrismaClient } from './generated/prisma/client'
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' })
        }

        const user = await prisma.user.create({
            data: { name, email }
        })

        res.status(201).json(user) // 201 = Created
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal server error' })
    }
})


server.listen(port, () => {
    console.log('server run on http://localhost:' + port);
    console.log('ws ready ws://localhost:' + port);

})