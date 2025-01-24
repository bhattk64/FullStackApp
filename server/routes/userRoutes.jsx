const express=require('express')
const { registerController, loginController } = require('../controllers/userControllers.jsx')

//router object
const router=express.Router()

//routes
//register-post
router.post('./register',registerController)

//login -post
router.post('./login',loginController)

//exports
module.exports=router
