import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controller/productController.js';
import authenticateToken from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.route('/').get(getProducts);
router.route('/:productId').get(getProduct);

// Protected routes (require authentication)
router.route('/').post(authenticateToken, createProduct);
router
  .route('/:productId')
  .put(authenticateToken, updateProduct)
  .delete(authenticateToken, deleteProduct);

export default router;
