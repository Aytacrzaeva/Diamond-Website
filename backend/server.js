const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connect = require('./app/configs/database.connect');
const products = require('./app/routes/product.route');
const AuthRoutes = require("./app/routes/auth.route");
const BlogRoutes = require("./app/routes/blog.route")
const OrderRoutes= require("./app/routes/order.route")
const path = require('path');
require("dotenv").config()

app.use(cors());

const uploadPath = path.join(__dirname, 'public');
app.use('/public', express.static(uploadPath));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/blogs", BlogRoutes);
app.use('/products', products);
app.use('/auth', AuthRoutes);
app.use('/orders', OrderRoutes);

app.listen(8080, () => {
  console.log("Server running");
});
