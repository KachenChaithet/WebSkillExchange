import express from 'express'
import { userAuth } from '../middleware/user.middleware.js'
import { fetchMessageFriend } from '../controllers/message.controller.js'

const router = express.Router()


router.get('/:friend', userAuth, fetchMessageFriend)


export default router