const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const connect = require('./app/configs/database.connect')
const products = require('./app/routes/product.route')
app.use(cors())
app.use('/products',products)


app.listen(8080, () => {
    console.log("server running")
})