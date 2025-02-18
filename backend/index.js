const PORT = 9001
const URLDB = 'mongodb://localhost:27017'

const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const nodemon = require('nodemon')
const {secret} = require('./config')
const User = require('./models/User')
const Product = require('./models/Product')

const app = express()

app.use(cors())
app.use(express.json())

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const {login, email, password} = req.body
    const user = new User({login, email, password})
    await user.save()
    res.json({
        message: 'Вы успешно зарегистрировались!'
    })
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    const user = await User.findOne({login})
    if (!user){
        return res.status(400).json({message: 'Not find'})
    } 
    if (user.password !== password){
        return res.status(400).json({message: 'Wrong login or password'})
    }
    const token = generateAccessToken(user._id)
    res.json({
        message: 'Вы успешно авторизованы!',
        token: token
    })
})

app.get('/products', async (req, res) => {

    /*const products = [
        {id: 1, header: 'Товар 1', price: '120'},
        {id: 2, header: 'Товар 2', price: '99'},
        {id: 3, header: 'Товар 4', price: '4789'},
        {id: 4, header: 'Товар 3', price: '789'},
        {id: 5, header: 'Товар 5', price: '2387'},
        {id: 6, header: 'Товар 6', price: '1399'},
        {id: 7, header: 'Товар 7', price: '321'},
        {id: 8, header: 'Товар 8', price: '3554'}
      ]*/
    const products = await Product.find()
    res.json({
        data: products
    })
})

const start = async () => {
    try {
        await mongoose.connect(URLDB)
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    } catch(e) {
        console.log(e)
    }
    
}

start()