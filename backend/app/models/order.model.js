const mongoose = require('mongoose')

const Order = mongoose.model(
    'Product',
    new mongoose.Schema(
        {
            user:{
                type:String
            },
            products:{
                type:Array
            },
            status:{
                type:String
            },
            paymentMethod:{
                type:String
            },
            comment:{
                type:String
            }
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Order }