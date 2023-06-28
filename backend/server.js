const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const connect = require('./app/configs/database.connect')
const products = require('./app/routes/product.route')
const AuthRoutes = require("./app/routes/AuthRoutes");
const path = require('path')
const uploadPath = path.join(__dirname,'public')
app.use('/public',express.static(uploadPath))
app.use(cors())
app.use(bodyParser())
app.use(express.json())
app.use('/products',products)
app.use('/auth',AuthRoutes)


app.listen(8080, () => {
    console.log("server running")
})

