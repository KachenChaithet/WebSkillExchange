import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import user from './routers/user.router.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173'
}))
const port = process.env.PORT || 5000


app.use('/', user)









const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
})

io.on('connection', (socket) => {
    console.log('user connection');

    socket.on('send_message', (data) => {
        console.log(`message:${{ data }}`);

    })

    socket.on('disconnect', () => {
        console.log('user disconnected');

    })
})




server.listen(port, () => {
    console.log('server run on http://localhost:' + port);
    console.log('ws ready ws://localhost:' + port);

})