const express = require('express');
const router = express.Router();
const {
    createBlogPosts,
} = require('../controllers/blog.controllers')

router.post('/create-blog-post', createBlogPosts)


module.exports = router;