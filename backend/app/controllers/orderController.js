const mongoose = require('mongoose');
const { Order } = require('../models/order.model');

const orderController = {
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
        comment:comment,
        status:"pending"
    })
    await newOrder.save()
    res.send(newOrder)
  },

  edit: async (req, res) => {
    try {
      const { _id, status } = req.body;
      const item = await Order.findByIdAndUpdate(_id, { status: status });
      res.send(item);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred while updating the order.');
    }
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

module.exports = { orderController };
