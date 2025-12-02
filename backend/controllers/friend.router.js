import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const sendFriendRequest = async (req, res) => {
    const { receiverId } = req.body;
    const senderId = req.userId


    try {
        const alreadyFriends = await prisma.friendship.findFirst({
            where: {
                OR: [
                    { user1Id: senderId, user2Id: receiverId },
                    { user1Id: receiverId, user2Id: senderId }
                ]
            }
        });

        if (alreadyFriends) {
            return res.status(400).json({ message: "already_friends" });
        }

        const pending = await prisma.friendRequest.findFirst({
            where: {
                senderId,
                receiverId,
                status: "pending"
            }
        });

        if (pending) return res.json({ message: "already_pending" });

        const fr = await prisma.friendRequest.create({
            data: { senderId, receiverId, status: "pending" }
        });

        res.json(fr);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const acceptFriendRequest = async (req, res) => {
    const { requestId } = req.body;
    const currentUserId = req.userId
    console.log(currentUserId);

    if (!currentUserId || !requestId) {
        return res.status(400).json({ message: "currentUserId and requestId are required" });
    }

    try {
        // หา FriendRequest ก่อน
        const request = await prisma.friendRequest.findFirst({
            where: {
                senderId: requestId,
                receiverId: currentUserId,
                status: "pending"
            }
        });

        if (!request) {
            return res.status(404).json({ message: "FriendRequest not found or already processed" });
        }

        // อัปเดต status ของ row ที่เจอ
        await prisma.friendRequest.update({
            where: { id: request.id },
            data: { status: "accepted" }
        });

        // สร้าง Friendship ตาม sender/receiver จริง
        await prisma.friendship.create({
            data: {
                user1Id: request.senderId,
                user2Id: request.receiverId
            }
        });

        res.json({ message: "accepted" });
    } catch (error) {
        console.error("Error in acceptFriendRequest:", error);
        res.status(500).json({ message: error.message });
    }
};



export const rejectFriendRequest = async (req, res) => {
    const { requestId } = req.body;
    const currentUserId = req.userId

    if (!requestId || !currentUserId) {
        return res.status(400).json({ message: "requestId and currentUserId are required" });
    }

    try {
        // หา FriendRequest ตาม Clerk ID
        const request = await prisma.friendRequest.findFirst({
            where: {
                senderId: requestId,        // คนส่งคำขอ
                receiverId: currentUserId,  // คนรับ (เรา)
                status: "pending"
            }
        });

        if (!request) {
            return res.status(404).json({ message: "FriendRequest not found or already processed" });
        }

        // อัปเดต status เป็น rejected
        await prisma.friendRequest.update({
            where: { id: request.id },  // ใช้ internal DB id
            data: { status: "rejected" }
        });

        res.json({ message: "rejected" });
    } catch (error) {
        console.error("Error in rejectFriendRequest:", error);
        res.status(500).json({ message: error.message });
    }
};


export const checkFriendStatus = async (req, res) => {
    const { me, other } = req.query;

    try {
        const friend = await prisma.friendship.findFirst({
            where: {
                OR: [
                    { user1Id: me, user2Id: other },
                    { user1Id: other, user2Id: me }
                ]
            }
        });

        if (friend) return res.json({ status: "friend" });

        const pending = await prisma.friendRequest.findFirst({
            where: {
                OR: [
                    { senderId: me, receiverId: other, status: "pending" },
                    { senderId: other, receiverId: me, status: "pending" }
                ]
            }
        });

        if (pending) {
            if (pending.senderId === me)
                return res.json({ status: "pending_sent" });
            else
                return res.json({ status: "pending_received" });
        }

        res.json({ status: "none" });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const getAllFriends = async (req, res) => {
    const { currentUserId } = req.query;

    if (!currentUserId) {
        return res.status(400).json({ message: "currentUserId is required" });
    }

    try {
        // query friends ทั้งสองฝั่ง
        const friends = await prisma.friendship.findMany({
            where: {
                OR: [
                    { user1Id: currentUserId },
                    { user2Id: currentUserId }
                ]
            },
            include: {
                user1: true,
                user2: true
            }
        });

        const friendList = friends.map(f => {
            if (f.user1Id === currentUserId) return f.user2;
            return f.user1;
        });

        res.json({ friends: friendList });
    } catch (error) {
        console.error("Error in getAllFriends:", error);
        res.status(500).json({ message: error.message });
    }
};

export const getRelatedUsers = async (req, res) => {
    const currentUserId = req.userId
    if (!currentUserId) return res.status(400).json({ message: "currentUserId is required" });

    try {
        // ดึง friendships ของเรา
        const friendships = await prisma.friendship.findMany({
            where: {
                OR: [
                    { user1Id: currentUserId },
                    { user2Id: currentUserId }
                ]
            }
        });

        // ดึง friendRequests ของเรา (pending)
        const friendRequests = await prisma.friendRequest.findMany({
            where: {
                OR: [
                    { senderId: currentUserId },
                    { receiverId: currentUserId }
                ],
                status: "pending"
            }
        });

        // รวม clerkId ทั้งหมดที่เกี่ยวข้อง
        const relatedIds = new Set();

        friendships.forEach(f => {
            relatedIds.add(f.user1Id === currentUserId ? f.user2Id : f.user1Id);
        });

        friendRequests.forEach(fr => {
            relatedIds.add(fr.senderId === currentUserId ? fr.receiverId : fr.senderId);
        });

        // ดึงข้อมูล user ทั้งหมดที่เกี่ยวข้อง
        const users = await prisma.user.findMany({
            where: { clerkId: { in: Array.from(relatedIds) } }
        });

        // เพิ่มสถานะให้แต่ละ user
        const usersWithStatus = users.map(user => {
            if (friendships.some(f => f.user1Id === currentUserId && f.user2Id === user.clerkId || f.user2Id === currentUserId && f.user1Id === user.clerkId)) {
                return { ...user, status: "friend" };
            }
            const pending = friendRequests.find(fr => fr.senderId === currentUserId && fr.receiverId === user.clerkId || fr.senderId === user.clerkId && fr.receiverId === currentUserId);
            if (pending) {
                return { ...user, status: pending.senderId === currentUserId ? "pending_sent" : "pending_received" };
            }
            return { ...user, status: "none" };
        });

        res.json({ users: usersWithStatus });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
