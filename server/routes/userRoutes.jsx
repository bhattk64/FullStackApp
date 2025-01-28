const express=require('express')
const { registerController, loginController, updateUser, requireSignin } = require('../controllers/userControllers.jsx')

//router object
const router=express.Router()

//routes
//register-post
router.post('./register',registerController)

//login -post
router.post('./login',loginController)

// update  -put
router.put('./update',requireSignin,  updateUser) 

//exports
module.exports=router
