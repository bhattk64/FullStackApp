const { hashPassword, comparePassword } = require('../helpers/authHelper.jsx')
const userModel = require('../models/userModels.jsx')
const jwt = require('jsonwebtoken')
var {expressJwt: jwt} = require('express-jwt')

//middleware
const requireSignin = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
})


const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //validation performed here
        if (!name || !email || !password || password.length < 6) {
            return res.status(400).send({ success: false, msg: "Please enter all fields" })
        }
        //existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(500).send({ success: false, msg: "User already exists" })
        }

        // hash password
        const hashedPassword = await hashPassword(password)

        //save user
        const user = await userModel({
            name,
            email,
            password: hashedPassword
        }).save()
        return res.status(201).send({ success: true, msg: "User registered" })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, msg: "Server error", error })
    }
}
//login controller
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        //validation
        if (!email || !password) {
            return res.status(400).send({ success: false, msg: "Please enter all fields" })
        }
        //find user
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).send({ success: false, msg: "User does not exist" })
        }

        //compare password
        const isMatch = await comparePassword(password, user.password)
        if (!isMatch) {
            return res.status(400).send({ success: false, msg: "Invalid credentials" })
        }
        //create tokwn jwt
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
        //undefined
        user.password = undefined
        return res.status(200).send({ success: true, msg: "User logged in", token, user })




    }


    catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, msg: "Server error", error })
    }
}

//update user
const updateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //user find
        const user = await userModel.findOne({email})
         //validation     
        if (!name && !email && !password) {
            return res.status(400).send({ success: false, msg: "Please enter all fields" }) 

            
        }
        
        //hash password
        const hashedPassword = password? await hashPassword(password):undefined
        //update user
        const updatedUser = await userModel.findOneAndUpdate(
            { email },
            { name: name || user.name, email: email || user.email, password: hashedPassword || user.password },
            { new: true }
        )
        updateUser.password = undefined
        return res.status(200).send({ success: true, msg: "User updated", updatedUser })
        
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ success: false, msg: "Server error", error })
    }
}


module.exports = { requireSignin, registerController, loginController, updateUser }