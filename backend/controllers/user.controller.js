import { verifyWebhook } from '@clerk/express/webhooks'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export const userController = async (req, res) => {
    try {
        const evt = await verifyWebhook(req)

        const { id } = evt.data
        const eventType = evt.type
        const email = evt.data.email_addresses?.[0]?.email_address || null
        const avatarUrl = evt.data.profile_image_url || evt.data.image_url || null
        const username = `${evt.data.first_name || ''}${evt.data.last_name || ''}`


        if (evt.type === 'user.created') {

            await prisma.user.create({
                data: {
                    clerkId: id,
                    email,
                    avatarUrl,
                    username
                }
            })
            console.log('User created')

        } else if (evt.type === 'user.updated') {
            await prisma.user.update({
                where: { clerkId: id },
                data: {
                    email,
                    avatarUrl,
                    username
                }
            })
            console.log('User updated')
        } else if (evt.type === 'user.deleted') {
            await prisma.user.delete({
                where: { clerkId: id }
            })
            console.log('User deleted');

        }

        return res.status(200).json({ message: 'success' })
    } catch (err) {
        console.error('Error verifying webhook:', err)
        return res.status(400).send('Error verifying webhook')
    }
}

export const getAllUsers = async (req, res) => {

    try {
        const user = await prisma.user.findMany()

        res.status(201).json({ message: 'success', user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }

}