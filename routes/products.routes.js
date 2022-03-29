const express = require('express');
const res = require('express/lib/response');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/products', productsController.getAllProducts);

router.get('/products/:id', productsController.getProductDetails);

module.exports = router;
