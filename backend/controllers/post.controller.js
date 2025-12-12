import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createPosts = async (req, res) => {

    try {
        const {
            postType,
            title,
            description,
            tags,
            category,
            level,
            availability,
            desiredCompletion,
            compensationType,
            budget,
            isSkillExchange,
            attachments,
        } = req.body

        const userId = req.userId

        if (!userId) {
            return res.status(500).json({ message: 'something what wrong' })
        }


        const create = await prisma.skillPost.create({
            data: {
                userId,
                postType,
                title,
                description,
                tags,
                category,
                level,
                availability,
                desiredCompletion,
                compensationType,
                budget,
                isSkillExchange,
                attachments,
            }
        })

        res.status(201).json({ message: 'create success', create })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, error: error.message })
    }
}

export const getPosts = async (req, res) => {
    try {

        const getall = await prisma.skillPost.findMany()

        res.status(201).json({ message: 'getall success', getall })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message })
    }

}

export const getPostsById = async (req, res) => {

    try {
        const { id } = req.params

        const getId = await prisma.skillPost.findUnique({
            where: { id: id }
        })

        if (!getId) return res.status(404).json({ message: 'not found' })


        res.status(201).json({ message: 'getId success', getId })


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message })
    }
}

export const updatePost = async (req, res) => {

    try {
        const { id } = req.params
        const {
            postType,
            title,
            description,
            tags,
            category,
            level,
            availability,
            desiredCompletion,
            compensationType,
            budget,
            isSkillExchange,
            attachments,
        } = req.body


        const update = await prisma.skillPost.update({
            where: { id: id },
            data: {
                postType,
                title,
                description,
                tags,
                category,
                level,
                availability,
                desiredCompletion,
                compensationType,
                budget,
                isSkillExchange,
                attachments,
            }
        })

        if (!update) return res.status(404).json({ message: 'not found' })

        res.status(201).json({ message: 'update success', update })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message })
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params

        const findId = await prisma.skillPost.findUnique({
            where: { id: id }
        })

        if (!findId) return res.status(404).json({ message: 'not found' })

        await prisma.skillPost.delete({
            where: { id: id }
        })

        res.status(201).json({ message: 'delete success' })


    } catch (error) {

    }
}

export const searchPosts = async (req, res) => {

}