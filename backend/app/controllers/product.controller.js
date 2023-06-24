const mongoose = require('mongoose');
const { Product } = require('../models/product.model');

const productController = {
  getAll: async (req, res) => {
    const products = await Product.find()
    res.send(products)
  },

  getById: async(req, res) => {
    let id = req.params.id;
    const target = await Product.findById(id)
    res.send(target)
  },

  add: async (req, res) => {    
    let product = new Product({
      name: req.body.name,
      images: req.file.filename,
      rating: req.body.rating,
      instock: req.body.stock,
      size: req.body.size.split(","),
      price: req.body.price,
      productcode: req.body.productcode,
    });

    await product.save(); // Corrected line
    res.send(product);
  },

  edit: async (req, res) => {
    try {
      let id = req.params.id;
      const files = req.files;
      const imageArr = files.map((file) => file.filename);

      await Product.findByIdAndUpdate(id, {
        name: req.body.name,
        images: imageArr,
        rating: req.body.rating,
        instock: req.body.stock,
        size: req.body.size,
        price: req.body.price,
        productcode: req.body.productcode,
      });

      res.send('Product Edited!');
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while editing the product.');
    }
  },

  delete: async (req, res) => {
    let id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.send("Product has been deleted");
  }
};

module.exports = { productController };
