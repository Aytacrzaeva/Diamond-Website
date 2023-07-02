const mongoose = require('mongoose');
const { Order } = require('../models/order.model');

const productController = {
  getAll: async (req, res) => {
    try {
      const orders = await Order.find();
      res.send(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while retrieving orders.');
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const target = await Order.findById(id);
      res.send(target);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while retrieving the order.');
    }
  },

  add: async (req, res) => {
    const {user,products,paymentMethod,comment} = req.body
    const newOrder = new Order({
        user:user,
        products:products,
        paymentMethod:paymentMethod,
        comment:comment
    })
    newOrder.save()
    res.send(newOrder)
  },

  edit: async (req, res) => {
    const {_id} = req.body
    const item = Order.findByIdAndUpdate(_id,{status:req.body.status})
    res.send(item)
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Order.findByIdAndDelete(id);
      res.send('Product has been deleted.');
    } catch (error) {
      res.status(500).send('An error occurred while deleting the order.');
    }
  },
};

module.exports = { productController };
