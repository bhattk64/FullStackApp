const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'], 
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'], 
        trim: true,
        minlength: 6
        
},
  role: {
    type: String,   
    default: 'user'
},
},  {timestamps: true}
);
module.exports = mongoose.model('User', userSchema);
