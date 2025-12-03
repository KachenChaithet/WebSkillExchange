import { create } from 'zustand'
import { api } from '../lib/api'

export const EventUser = (set, get) => ({
    token: '',
    userAll: [],

    fetchuser: async (token) => {
        try {
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
})




export const useEventUser = create(EventUser)