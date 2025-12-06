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
    onlineUsers: [],

    setToken: (tk) => set({ token: tk }),
    setCurrentUser: (user) => set({ currentUser: user }),
    setFriend: (friend) => set({ currentFriend: friend }),
    setSelcetFriend: (friend) => set({ friend: friend }),



    handleOnlineUsers: (list) => {
        set({ onlineUsers: list })
    },
    initSocket: () => {
        const { currentUser, handleOnlineUsers } = get()
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

        socket.on('onlineUsers', handleOnlineUsers)

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
    fetchMessage: async (friend, getToken) => {

        const token = await getToken()  
        if (!token) return 'not token'

        const msg = await api.message.getmessages('/message', token, friend)
        set({ message: msg })
    },

})

export const useChatStore = create(ChatStore)