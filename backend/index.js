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

app.post('/personAcc', async (req, res) => {
    const token = req.header('Authorization')?.split(' ')[1]
    const decoded = jwt.verify(token, secret)
    console.log(decoded)
    const user = await User.findById(decoded.id)
    res.json({
        data: user
    })
})

app.put('/personAcc', async (req, res) => {
try {
    const authHeader = req.header('Authorization')
    if (!authHeader) {
        return res.status(401).json({message: 'Нет токена'})
    }
    const token = authHeader?.split(' ')[1]
    const decoded = jwt.verify(token, secret)
    const userId = decoded.id
    const { email, firstName, lastName } = req.body
    const updateUser = await User.findByIdAndUpdate(
        userId,
        {email, firstName, lastName},
        {new: true}
    )
    if (!updateUser) {
        return res.status(400).json({message: 'Пользователь не найден'})
    }
    res.json({message: 'Данные обновлены', user: updateUser})
}
catch (error) {
    console.error(error)
    res.status(500).json({message: 'Ошибка сервера', error: error.message})
}
})

app.get('/products', async (req, res) => {

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