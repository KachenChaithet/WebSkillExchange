import { create } from 'zustand'

export const EventUser = (set, get) => ({
    user: [],
})




export const useEventUser = create(EventUser)