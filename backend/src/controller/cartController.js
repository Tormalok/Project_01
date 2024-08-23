// controller/cartController.js
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js';

// @desc Get cart for a user
// @route GET '/api/carts/:userId'
// @access Private
const getCart = async (req, res) => {
  const userId = req.params.userId;

  try {
    const cart = await Cart.findOne({ user: userId }).populate('items.product');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching cart', error);
    res.status(500).json({ message: 'Error fetching cart' });
  }
};

// @desc Add item to cart
// @route POST '/api/carts/:userId'
// @access Private
const addItemToCart = async (req, res) => {
  const userId = req.params.userId;
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items: [], totalPrice: 0 });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }

    cart.totalPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * product.price;
    }, 0);

    const updatedCart = await cart.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    console.error('Error adding item to cart', error);
    res.status(500).json({ message: 'Error adding item to cart' });
  }
};

// @desc Remove item from cart
// @route DELETE '/api/carts/:userId/:itemId'
// @access Private
const removeItemFromCart = async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter((item) => item._id.toString() !== itemId);

    cart.totalPrice = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);

    const updatedCart = await cart.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    console.error('Error removing item from cart', error);
    res.status(500).json({ message: 'Error removing item from cart' });
  }
};

// @desc Clear cart
// @route DELETE '/api/carts/:userId'
// @access Private
const clearCart = async (req, res) => {
  const userId = req.params.userId;

  try {
    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = [];
    cart.totalPrice = 0;

    const updatedCart = await cart.save();

    res.status(200).json(updatedCart);
  } catch (error) {
    console.error('Error clearing cart', error);
    res.status(500).json({ message: 'Error clearing cart' });
  }
};

export { getCart, addItemToCart, removeItemFromCart, clearCart };
