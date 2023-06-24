const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const connect = require('./app/configs/database.connect')
const products = require('./app/routes/product.route')
const path = require('path')
const uploadPath = path.join(__dirname,'public')
app.use('/public',express.static(uploadPath))
app.use(cors())
app.use('/products',products)
app.use(express.json())


app.listen(8080, () => {
    console.log("server running")
})