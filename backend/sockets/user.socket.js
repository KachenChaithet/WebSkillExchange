export const registerUserSocket = (io, socket) => {
    const userId = socket.handshake.query.userId
    if (!userId) return

    if (!io.onlineUsers.has(userId)) {
        io.onlineUsers.set(userId, new Set())
    }

    io.onlineUsers.get(userId).add(socket.id)

    io.emit('onlineUsers', Array.from(io.onlineUsers.keys()))

}


export const removeUserSocket = (io, socket) => {
    for (const [userId, sockets] of io.onlineUsers.entries()) {
        sockets.delete(socket.id)

        if (sockets.size === 0) {
            io.onlineUsers.delete(userId)
        }
    }

    io.emit('onlineUsers', Array.from(io.onlineUsers.keys()))

}