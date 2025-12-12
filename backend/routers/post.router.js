import express from 'express'
import { userAuth } from '../middleware/user.middleware.js'
import { createPosts, deletePost, getPosts, getPostsById, searchPosts, updatePost } from '../controllers/post.controller.js'

const router = express.Router()


router.post('/create', userAuth, createPosts)

router.get('/get', userAuth, getPosts)
router.get('/getId/:id', userAuth, getPostsById)
router.get('/search', userAuth, searchPosts)

router.put('/update/:id', userAuth, updatePost)
router.delete('/delete/:id', userAuth, deletePost)


export default router