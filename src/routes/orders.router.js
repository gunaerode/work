const express = require('express');
const {
  createOrder,
  getUserOrders
} = require('../controllers/orders.controller');

const authMiddleware = require('../middlewares/auth.middleware');

const orderRouter = express.Router();

orderRouter.post('/', authMiddleware, createOrder);
orderRouter.get('/:id', authMiddleware, getUserOrders);

module.exports = orderRouter;