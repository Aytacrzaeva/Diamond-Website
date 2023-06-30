const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connect = require('./app/configs/database.connect');
const products = require('./app/routes/product.route');
const AuthRoutes = require("./app/routes/AuthRoutes");
const path = require('path');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


const uploadPath = path.join(__dirname, 'public');
app.use('/public', express.static(uploadPath));

app.use(express.json());

// CORS ayarlarını yapılandırma

app.use('/products', products);
app.use('/auth', AuthRoutes);

app.listen(8080, () => {
  console.log("Server running");
});
