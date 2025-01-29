const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authControllers.jsx');
const { createPostController, getAllPostController } = require('../controllers/postController.jsx');
//create post 
router.post('/create', requireSignin, createPostController);


//get all posts
router.get('/all', getAllPostController);
module.exports = router;