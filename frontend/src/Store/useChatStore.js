import { io } from "socket.io-client"
import { create } from "zustand"

export const ChatStore = (set, get) => ({
    socket: null,
    message: [],
    currentUser: null,
    currentFriend: null,

    setCurrentUser: (user) => set({ currentUser: user }),
    setFriend: (friend) => set({ currentFriend: friend }),

    initSocket: () => {
        const { currentUser } = get()
        const socket = io('http://localhost:5000', {
            query: {
                userId: currentUser
            }
        })

        socket.on('receiveMessage', (msg) => {
            set({
                message: [...get().message, msg]
            })
        })

        set({ socket })
    },
    sendMessage: (msg) => {
        const { socket, currentUser, currentFriend } = get()
        if (!socket || !currentUser || !currentFriend) return;
        const payload = {
            senderId: currentUser,
            receiverId: currentFriend,
            text: msg
        }

        socket.emit('sendMessage', payload)
    }
    ,

    disconnectSocket: () => {
        const socket = get().socket
        if (socket) {
            socket.disconnect()
        }
        set({ socket: null })
    }
})

export const useChatStore = create(ChatStore)