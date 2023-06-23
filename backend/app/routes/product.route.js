const express = require('express')
const { productController } = require('../controllers/product.controller')
const store = require('../middlewares/multer')
const productValidation = require('../validations/product.validation')
const router = express.Router()
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/'); // Specify the directory where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        var temp_file_arr = file.originalname.split(".");
        var temp_file_name = temp_file_arr[0];

        var temp_file_extension = temp_file_arr[1];

        cb(null, temp_file_name + '-' + Date.now() + '.' + temp_file_extension); // Use the original file name as the destination file name
    }
  });
  
  let upload = multer({storage:storage})


//get All
router.route('/').get(productController.getAll)
// GetById
router.route('/:id').get(productController.getById)
//Add
router.post(
    '/',
    upload.any(),
    productController.add,
)
//edit
router.put(
    '/:id',
    store.array('images', 5),
    productValidation,
    productController.edit,
)
//delete
router.route('/:id').delete(productController.delete)
module.exports = router