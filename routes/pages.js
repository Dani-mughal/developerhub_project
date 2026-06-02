const express = require('express');
const router = express.Router();
const path = require('path');

// Home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Products page
router.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/products.html'));
});

// Product details page
router.get('/products/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/product-details.html'));
});

module.exports = router;
