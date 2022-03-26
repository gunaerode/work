const expressAsyncHandler = require('express-async-handler');
const User = require('../models/Users');
const { Order, ObjectId } = require('../models/Orders');

// place orders
const createOrder = expressAsyncHandler(async (req, res) => {
  const { product_name, type, quantity, price, total } = req?.body;
  console.log(req.user);
  const { _id: user_id } = req?.user;
  if (!quantity) throw new Error('Quantity is not valid');

  try {
    const orderDetails = await Order.create({ product_name, type, quantity, price, total, user_id });
    res.status(201).json({
      data: orderDetails,
      message: 'Order placed successful',
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// get particular user orders
const getUserOrders = expressAsyncHandler(async (req, res, next) => {
  const { id } = req?.params;
  const userCheck = await User.findOne({ _id: ObjectId(id) });
  if (!userCheck) throw new Error('User doesn\'t exists');
  try {
    const orderDetails = await Order.find({user_id: ObjectId(id)});
    res.json(orderDetails);
  } catch (error) {
    next(error)
  }
});

module.exports = { createOrder, getUserOrders };