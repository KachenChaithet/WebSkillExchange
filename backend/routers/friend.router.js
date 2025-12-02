import express from 'express'
import { acceptFriendRequest, checkFriendStatus, getAllFriends, getRelatedUsers, rejectFriendRequest, sendFriendRequest } from '../controllers/friend.router.js'
import { userAuth } from '../middleware/user.middleware.js'

const router = express.Router()

router.post('/request', userAuth, sendFriendRequest)
router.post('/accept', userAuth, acceptFriendRequest)
router.post('/reject', rejectFriendRequest)
router.get('/status', checkFriendStatus)
router.get('/getall', getAllFriends)
router.get('/related', userAuth, getRelatedUsers)

export default router