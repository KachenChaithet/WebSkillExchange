import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import user from './routers/user.router.js'
import friend from './routers/friend.router.js'
import { clerkMiddleware } from '@clerk/express'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))
const port = process.env.PORT || 5000

app.use(clerkMiddleware())

app.use('/', user)

app.use('/friends', friend)







const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) {
        socket.join(userId)
        console.log("User joined room   :", userId)
    }

    socket.on('sendMessage', (data) => {
        const { senderId, receiverId, text } = data
        console.log(senderId, receiverId, text);

        const msg = {
            senderId, receiverId, text
        }
        io.to(receiverId).emit('receiveMessage', msg)

        io.to(senderId).emit("receiveMessage", msg);


    })

    socket.on('disconnect', () => {
        console.log('user disconnected');

    })
})




server.listen(port, () => {
    console.log('server run on http://localhost:' + port);
    console.log('ws ready ws://localhost:' + port);

})