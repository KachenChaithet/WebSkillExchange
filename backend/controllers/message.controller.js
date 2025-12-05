import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const fetchMessageFriend = async (req, res) => {
    const { friend } = req.params
    const user = req.userId


    const msgs = await prisma.message.findMany({
        where: {
            OR: [
                { senderId: user, receiverId: friend },
                { senderId: friend, receiverId: user },
            ]
        },
        orderBy: { createdAt: 'asc' }
    })

    res.status(201).json(msgs)


}