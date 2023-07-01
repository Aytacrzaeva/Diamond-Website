const express = require('express');
const { productController } = require('../controllers/product.controller')
const productValidation = require('../validations/product.validation')
const router = express.Router()
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/'); // Specify the directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name as the destination file name
  }
});

const upload = multer({ storage });

//get All
router.route('/').get(productController.getAll)
// GetById
router.route('/:id').get(productController.getById)
//Add
router.post(
    '/',
    upload.single('images'),
    productController.add,
)
//edit
router.put(
    '/:id',
    productValidation,
    productController.edit,
)
//delete
router.route('/:id').delete(productController.delete)
module.exports = router