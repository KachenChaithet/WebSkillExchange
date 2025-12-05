import express from 'express'
import { getAllUsersWithStatus, userController } from '../controllers/user.controller.js'
import { userAuth } from '../middleware/user.middleware.js'

const router = express.Router()

router.post('/api/webhooks', express.raw({ type: 'application/json' }), userController)
router.get('/users', userAuth, getAllUsersWithStatus)

export default router