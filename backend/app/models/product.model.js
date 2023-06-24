const mongoose = require('mongoose')

const Product = mongoose.model(
    'Product',
    new mongoose.Schema(
        {
            name: String,
            images: String,
            rating:Number,
            instock: Boolean,
            size: Array,
            price: Number,
            productcode:String,
            isDeleted: {
                type: Boolean,
                default: false,
            },
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Product }