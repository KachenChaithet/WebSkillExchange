import { clerkClient, getAuth } from '@clerk/express'

export const userAuth = async (req, res, next) => {
    try {
        const { isAuthenticated, userId } = getAuth(req)


        if (!isAuthenticated) {
            return res.status(401).json({ error: 'User not authenticated' })
        }

        const user = await clerkClient.users.getUser(userId);


        req.userId = user.id
        req.user = user;
        next();
    } catch (error) {

    }
}