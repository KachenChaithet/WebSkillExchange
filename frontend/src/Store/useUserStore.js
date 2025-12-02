import { create } from 'zustand'
import { api } from '../lib/api'
import { useAuth } from '@clerk/clerk-react'

export const EventUser = (set, get) => ({
    userAll: [],

    fetchuser: async (token) => {
        try {

           
            const users = await api.users.getall('/users', token)
            console.log(users);

            set({
                userAll: users
            })
        } catch (error) {
            console.log(error);
        }
    }
})




export const useEventUser = create(EventUser)