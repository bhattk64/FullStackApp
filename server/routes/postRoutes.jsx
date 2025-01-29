const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authControllers.jsx');
const { createPostController, getAllPostController, getUserPostController } = require('../controllers/postController.jsx');
//create post 
router.post('/create', requireSignin, createPostController);

 
//get all posts
router.get('/all', getAllPostController);
//get user posts
router.get('/user', requireSignin, getUserPostController);
module.exports = router;