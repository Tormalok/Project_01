// routes/cartRoutes.js
import express from 'express';
import {
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearCart,
} from '../controller/cartController.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/:userId')
  .get(authenticateToken, getCart)
  .post(authenticateToken, addItemToCart)
  .delete(authenticateToken, clearCart);

router.route('/:userId/:itemId').delete(authenticateToken, removeItemFromCart);

export default router;
