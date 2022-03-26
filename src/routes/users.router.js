const express = require('express');
const {
  userSignup,
  fetchUsers,
  userLogin,
} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const userRouter = express.Router();

userRouter.get('/', authMiddleware, fetchUsers);
userRouter.post('/signup', userSignup);
userRouter.post('/login', userLogin);

module.exports = userRouter;
