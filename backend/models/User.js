const { Schema, model } = require('mongoose')
//Схема для юзера для БД
const User = new Schema({
    login: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }
})

module.exports = model('User', User)