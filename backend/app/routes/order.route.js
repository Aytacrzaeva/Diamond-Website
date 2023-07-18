const express = require('express')
const router = express.Router()
const User= require("../models/Usermodels")
const Product= require("../models/product.model")
const Order= require("../models/order.model")
const {orderController}= require("../controllers/orderController")


router.route('/').get(orderController.getAll)
router.route('/').post(orderController.add)
router.route('/:id').get(orderController.getById)
router.route('/:id').put(orderController.edit)
router.route('/:id').delete(orderController.delete)

  
module.exports=router


