const express = require('express')
const router = express.Router()
const User= require("../models/Usermodels")
const Product= require("../models/product.model")
const Order= require("../models/order.model")


router.post('/orders', async (req, res) => {
    try {
        const { userId, productsIds } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const products = await Product.find({ _id: { $in: productsIds } });
        if (products.length !== productsIds.length) {
            return res.status(404).json({ error: "One or more product not found" });
        }
        const order = new Order({
            userId,
            products: products.map((product) => product._id),
        });
        await order.populate('products')
        user.orders.push(order);
        await order.save();
        return res.status(201).json(order);
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
});