const express=require('express')
const { registerController } = require('../controllers/userControllers.jsx')

//router object
const router=express.Router()

//routes
router.post('./register',registerController)
router.route('/users/:id').get((req,res)=>{
    res.send('Get user')
}
).put((req,res)=>{
    res.send('Update user')
}
).delete((req,res)=>{
    res.send('Delete user')
}
)

//exports
module.exports=router
