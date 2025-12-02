import express from 'express'
import { acceptFriendRequest, checkFriendStatus, getAllFriends, rejectFriendRequest, sendFriendRequest } from '../controllers/friend.router.js'

const router = express.Router()

router.post('/request', sendFriendRequest)
router.post('/accept', acceptFriendRequest)
router.post('/reject', rejectFriendRequest)
router.get('/status', checkFriendStatus)
router.get('/getall', getAllFriends)

export default router