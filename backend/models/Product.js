const { Schema, model } = require('mongoose')

const Product = new Schema({
    header: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
})

module.exports = model('Product', Product)