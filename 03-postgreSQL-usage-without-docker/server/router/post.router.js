const express = require('express')
const pool = require('../db')
const PostController = require('../controller/post.controller')

const router = express.Router()

router.get('/posts', PostController.getAllPosts)
router.post('/post', PostController.createPost)

module.exports = router
