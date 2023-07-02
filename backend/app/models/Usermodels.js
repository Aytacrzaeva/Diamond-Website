const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "FullName is required"],
        },
        lastname:{
            type:String,
            requred:[true, "LastName is required"]
        },
        email: {
            type: String,
            required: [true, "Email is Required"],
            unique: true,
        },
        number: {
            type: String,
            required: [true, "Number is Required"],
        },
        password: {
            type: String,
            required: [true, "Password is Required"],
        },
        isAdmin: {
            type: Boolean,
            default:false
        },
        address:{
            type:String,
            required:[true,"Adress is Required"]
        },
        postcode:{
            type:Number,
            required:[true,"Postcode is Required"]
        },
        city:{
            type:String,
            required:[true,"City is Required"]
        }
        ,
        country:{
            type:String,
            required:[true,"country is Required"]
        },
        region:{
            type:String,
            required:[true,"Region is Required"]
        },

        orders:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Order'
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);