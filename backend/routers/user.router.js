import express from 'express'
import { getAllUsers, userController } from '../controllers/user.controller.js'

const router = express.Router()

router.post('/api/webhooks', express.raw({ type: 'application/json' }), userController)
router.get('/users', getAllUsers)

export default router