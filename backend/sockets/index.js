import { Server } from 'socket.io'
import registerMessageSocket from './message.socket.js'
import { registerUserSocket, removeUserSocket } from './user.socket.js'


export const initSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:5173'
        }
    })

    io.onlineUsers = new Map()

    io.on('connection', (socket) => {
        const userId = socket.handshake.query.userId
        if (userId) {
            socket.join(userId)
        }


        registerUserSocket(io, socket)


        registerMessageSocket(io, socket)

        socket.on('disconnect', () => {
            removeUserSocket(io, socket)

        })
    })
}
