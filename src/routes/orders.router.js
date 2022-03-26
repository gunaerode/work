const express = require('express');
const {
  createOrder,
  getUserOrders
} = require('../controllers/orders.controller');

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
orderRouter.get('/:id', getUserOrders);

module.exports = orderRouter;