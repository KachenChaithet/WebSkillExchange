import { create } from 'zustand'
import { api } from '../lib/api'
import { useChatStore } from './useChatStore'

export const EventUser = (set, get) => ({
    token: '',
    userAll: [],
    friends: [],


    fetchuser: async (token) => {
        try {
            if (!token) {
                console.warn("❗ No token provided to fetchuser");
                return;
            }
            const userall = await api.users.getall('/users', token)
            const { users } = userall

            set({ token: token })
            set({
                userAll: users
            })
        } catch (error) {
            console.log(error);
        }
    },
    addFriend: async (payload) => {
        try {
            const { token } = get()

            await api.friends.request('/friends/request', payload, token)
            await get().fetchuser(token)
        } catch (error) {
            console.log(error);

        }
    }

    ,
    acceptFriend: async (payload) => {
        try {
            const token = get().token          // ดึง token จาก state
            const fetchuser = get().fetchuser  // ดึงฟังก์ชัน fetchuser
            await api.friends.accept('/friends/accept', payload, token)

            await fetchuser(token)
        } catch (error) {
            console.log(error);

        }
    },
    updateUserStatus: (id, newStatus) => {
        set((state) => ({
            userAll: Array.isArray(state.userAll)
                ? state.userAll.map((u) =>
                    u.clerkId === id ? { ...u, status: newStatus } : u
                )
                : []
        }))
    },
    fetchFriend: async (id) => {
        try {
            const friendall = await api.friends.getall('/friends/getall', id)
            const { friends } = friendall
            set({ friends: friends })

        } catch (error) {
            console.log(error);
        }
    }
})




export const useEventUser = create(EventUser)