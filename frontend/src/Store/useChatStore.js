import { io } from "socket.io-client"
import { create } from "zustand"
import { api } from "../lib/api"


export const ChatStore = (set, get) => ({
    socket: null,
    message: [],
    currentUser: null,
    currentFriend: null,
    token: null,
    friend: null,

    setToken: (tk) => set({ token: tk }),
    setCurrentUser: (user) => set({ currentUser: user }),
    setFriend: (friend) => set({ currentFriend: friend }),
    setSelcetFriend: (friend) => set({ friend: friend }),

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
    },

    disconnectSocket: () => {
        const socket = get().socket
        if (socket) {
            socket.disconnect()
        }
        set({ socket: null })
    },
    fetchMessage: async (friend) => {
        const { token } = get()
        const msg = await api.message.getmessages('/message', token, friend)
        set({ message: msg })
    }
})

export const useChatStore = create(ChatStore)