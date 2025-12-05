import axios from 'axios'
import { ArrowUpWideNarrow } from 'lucide-react'

const apiBackend = import.meta.env.VITE_BACKENDAPI_URL

const client = axios.create({
    baseURL: apiBackend
})


export const api = {
    post: {
        async getall(path) {
            const { data } = await client.get(path)
            return data
        },

        async create(path, payload) {
            const { data } = await client.post(path, payload)
            return data
        },

        async delete(path, id) {
            const { data } = await client.delete(`${path}/${id}`)
            return data
        },
        async getById(path, id) {
            const { data } = await client.get(`${path}/${id}`)
            return data
        },
        async update(path, payload, id) {
            const { data } = await client.put(`${path}/${id}`, payload)
            return data
        }

    },
    friends: {

        async request(path, payload, token) {
            const { data } = await client.post(path, { receiverId: payload }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            return data
        },

        async accept(path, payload, token) {
            const { data } = await client.post(path, { requestId: payload }, {
                headers: { Authorization: `Bearer ${token}` }
            })
            return data
        },
        async reject(path, payload) {
            const { data } = await client.post(path, payload)
            return data
        },
        async getall(path, id) {
            const { data } = await client.get(`${path}?currentUserId=${id}`)
            return data
        }
    },
    users: {
        async getall(path, token) {
            const { data } = await client.get(path, {
                headers: { Authorization: `Bearer ${token}` }
            })
            return data
        }
    },
    message: {
        async getmessages(path, token, payload) {

            const { data } = await client.get(`${path}/${payload}`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return data
        }
    }

}