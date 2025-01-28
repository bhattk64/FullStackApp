const express = require('express');
const router = express.Router();
const { requireSignin } = require('../controllers/authControllers.jsx');
const { createPostController } = require('../controllers/postController.jsx');
//create post 
router.post('/create', requireSignin, createPostController);



module.exports = router;