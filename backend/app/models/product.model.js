const mongoose = require('mongoose')

const Product = mongoose.model(
    'Product',
    new mongoose.Schema(
        {
            name: String,
            raiting:Number,
            productcode:String,
            price: Number,
            size: Number,
            instock: Boolean,
            images: [
                {
                    type: String,
                    isPoster: {
                        type: Boolean,
                        default: false,
                    },
                    src: String,
                },
            ],
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