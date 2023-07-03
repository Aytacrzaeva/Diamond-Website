const mongoose = require('mongoose')

const Order = mongoose.model(
    'Order',
    new mongoose.Schema(
        {
            user:{
                type:Object
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