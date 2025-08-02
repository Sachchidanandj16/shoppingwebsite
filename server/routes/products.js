const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts
} = require('../controllers/products');
const { protect, admin } = require('../middleware/auth');

router.route('/')
  .get(getProducts)
  .post(protect, admin, createProduct);

router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);

router.route('/:id')
  .get(getProduct)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;