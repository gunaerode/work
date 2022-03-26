const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Types: { ObjectId } } = mongoose;

const orderSchema = mongoose.Schema(
  {
    product_name: {
      required: [true, 'Product Name is required'],
      type: String,
    },
    type: {
      required: [true, 'Type is required'],
      type: String,
    },
    quantity: {
      required: [true, 'Quantity is required'],
      type: String,
    },
    price: {
      type: Number,
      default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    user_id: {
        required: [true, 'User Id is required'],
        type: ObjectId,
        ref: 'User',
    }
  },
  {
    timestamps: true,
  }
);

orderSchema.pre('save', async function (next) {
  if (!this.isModified()) next();
  if (this.quantity > 0) 
    this.total = this.quantity * this.price;
  next(); // need to pass to next route
});

const Order = mongoose.model('Order', orderSchema);
module.exports = { Order, ObjectId };