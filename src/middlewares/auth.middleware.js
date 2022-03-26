const expressAsyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")) {
        token = req.headers?.authorization?.split(" ")[1];
        try {
            console.log(token);
            if(token) {
                const decodeUser = jwt.verify(token, process.env.JWT_KEY);
                // find the user
                const currentUser = await User.findById(decodeUser?._id)
                // NOTE: attach the user into req object
                req.user = currentUser;
                next();
            }
        } catch (error) {
            next(error);
        }
    } else {
        throw new Error("Provide valid token...")
    }
});

module.exports = authMiddleware;