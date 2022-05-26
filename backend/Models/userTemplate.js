const mongoose = require("mongoose")

const userTemplate = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
        
    },
    username: {
        type: String,
        required: true
       
    },
    password: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    member: {
        type:Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('Users', userTemplate)