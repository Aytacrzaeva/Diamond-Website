const mongoose = require('mongoose');
const { Product } = require('../models/product.model');

const productController = {
  getAll: async (req, res) => {
    try {
      const products = await Product.find();
      res.send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while retrieving products.');
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const target = await Product.findById(id);
      res.send(target);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while retrieving the product.');
    }
  },

  add: async (req, res) => {
    try {
      const { name, rating, instock, size, price, productcode,mainSrc,hoverSrc} = req.body;
      const main = req.body.mainSrc;
      const hover = req.body.hoverSrc;

      const product = new Product({
        name,
        mainSrc,
        main,
        hover,
        hoverSrc,
        rating,
        instock,
        size: size.split(','),
        price,
        productcode,
      });

      await product.save();
      res.send(product);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while adding the product.');
    }
  },

  edit: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, rating, instock, size, price, productcode } = req.body;
      const files = req.files;
      const mainArr = files.map((file) => file.filename);
      const hoverArr = files.map((file) => file.filename);

      await Product.findByIdAndUpdate(id, {
        name,
        main: mainArr,
        hover:hoverArr,
        rating,
        instock,
        size,
        price,
        productcode,
      });

      res.send('Product edited successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while editing the product.');
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Product.findByIdAndDelete(id);
      res.send('Product has been deleted.');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while deleting the product.');
    }
  },
};

module.exports = { productController };
