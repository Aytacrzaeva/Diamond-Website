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
            requred:[true, "sfddfgr"]
        },
        email: {
            type: String,
            required: [true, "Email is Required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is Required"],
        },
        isAdmin: {
            type: Boolean,
            default:false
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);