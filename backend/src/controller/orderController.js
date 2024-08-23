import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';
import mongoose from 'mongoose';

// @desc Create new order
// @route POST /api/orders
// @access Private
const createOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    try {
      const createdOrder = await order.save();
      return res.status(201).json(createdOrder);
    } catch (error) {
      console.error('Error creating order', error);
      return res.status(500).json({ message: 'Error creating order' });
    }
  }
};

// @desc Get order by ID
// @route GET /api/orders/:orderId
// @access Private
const getOrderById = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: 'Invalid order ID' });
    }

    const order = await Order.findById(orderId).populate('user', 'name email');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    return res.status(200).json(order);
  } catch (error) {
    console.error('Error fetching order', error);
    return res.status(500).json({ message: 'Error fetching order' });
  }
};

// @desc Update order to paid
// @route PUT /api/orders/:orderId/pay
// @access Private
const updateOrderToPaid = async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };

    const updatedOrder = await order.save();

    return res.status(200).json(updatedOrder);
  } catch (error) {
    console.error('Error updating order to paid', error);
    return res.status(500).json({ message: 'Error updating order to paid' });
  }
};

// @desc Get logged in user's orders
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders', error);
    return res.status(500).json({ message: 'Error fetching orders' });
  }
};

// @desc Get all orders (admin only)
// @route GET /api/orders
// @access Private/Admin
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'id name');
    return res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching all orders', error);
    return res.status(500).json({ message: 'Error fetching all orders' });
  }
};

export { createOrder, getOrderById, updateOrderToPaid, getMyOrders, getOrders };
