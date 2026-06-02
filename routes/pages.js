const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Home page
router.get('/', productController.getHomePage);

// Products page
router.get('/products', productController.getProducts);

// Product details page
router.get('/products/:id', productController.getProductDetails);

module.exports = router;
