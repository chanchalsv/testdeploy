const express = require('express');
const router = express.Router();
const { fetchProducts, createProduct } = require('../controllers/shopifyController');

// Route to fetch product data
router.get('/products', fetchProducts);

// Route to create a new product
router.post('/products', createProduct);

module.exports = router;
