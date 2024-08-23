import express from 'express';
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} from '../controller/orderController.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

// Create a new order
router.route('/').post(authenticateToken, createOrder);

// Get all orders (admin only)
router.route('/').get(authenticateToken, getOrders);

// Get logged in user's orders
router.route('/myorders').get(authenticateToken, getMyOrders);

// Get order by ID
router.route('/:orderId').get(authenticateToken, getOrderById);

// Update order to paid
router.route('/:orderId/pay').put(authenticateToken, updateOrderToPaid);

export default router;
