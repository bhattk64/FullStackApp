const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authControllers.jsx');
const { createPostController, getAllPostController, getUserPostController, deletePostController } = require('../controllers/postController.jsx');
//create post 
router.post('/create', requireSignin, createPostController);

 
//get all posts
router.get('/all', getAllPostController);
//get user posts
router.get('/user', requireSignin, getUserPostController);
//delete posts
router.delete('/delete/:id', requireSignin, deletePostController);
module.exports = router;