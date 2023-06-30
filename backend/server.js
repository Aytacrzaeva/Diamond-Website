const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connect = require('./app/configs/database.connect');
const products = require('./app/routes/product.route');
const AuthRoutes = require("./app/routes/AuthRoutes");
const path = require('path');

const uploadPath = path.join(__dirname, 'public');
app.use('/public', express.static(uploadPath));

app.use(express.json());

// CORS ayarlarını yapılandırma
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


// CORS başlıklarını ekleme
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/products', products);
app.use('/auth', AuthRoutes);

app.listen(8080, () => {
  console.log("Server running");
});
