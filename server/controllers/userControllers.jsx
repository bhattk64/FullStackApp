const { hashPassword } = require('../utils/hashPassword.jsx')
const userModel = require('../models/userModels.jsx')
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

module.exports = { registerController }