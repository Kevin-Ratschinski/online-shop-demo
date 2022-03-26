const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

router.get('/products', function (req, res) {
  res.render('customer/products/all-products');
});

module.exports = router;
