import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const registerMessageSocket = (io, socket) => {
    socket.on('sendMessage', async (data) => {
        const { senderId, receiverId, text } = data

        
        const msg = await prisma.message.create({
            data: {
                senderId,
                receiverId,
                text,
            }
        })

        io.to(receiverId).emit('receiveMessage', msg)
        io.to(senderId).emit('receiveMessage', msg)
    })
}

export default registerMessageSocket
