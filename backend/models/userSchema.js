const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true


    },

    name: {
        type: String,
        required: true


    },
    surname: {
        type: String,
        required: true


    },
    middlename: {
        type: String,
        required: true


    },

    gender: {
        type: String,
        required: true


    },
    // Date: {
    //     type: Date,
    //     required: true


    // },
    address: {
        type: String,
        required: true


    },
    password: {
        type: String,
        required: true


    }
})
const User = mongoose.model('user', userSchema);
module.exports = User;