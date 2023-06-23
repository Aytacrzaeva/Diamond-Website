const mongoose = require('mongoose');
const { Product } = require('../models/product.model');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name as the destination file name
  }
});

const upload = multer({ storage: storage });

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
    const image = req.files;

    let product = new Product({
      name: req.body.name,
      images: image.path,
      rating: req.body.rating,
      instock: req.body.stock,
      size: req.body.size,
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
