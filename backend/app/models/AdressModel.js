const mongoose = require('mongoose')

const Product = mongoose.model(
    'Product',
    new mongoose.Schema(
        {
            firstname: {
                type: String,
                required: [true, "FullName is required"],
            },
            lastname:{
                type:String,
                requred:[true, "LastName is required"]
            },
            adress:{
                type:String,
                required:[true,"Adress is required"]
            },
            postcode: {
                type:String,
                required:[true,"fsedf"]
            },
            city: Array,
            country: Number,
            region:String,
        
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { Product }