const express = require('express');
const productsCtrl = require('../controller/products.controller');

const router = express.Router();

router.get('/products' , productsCtrl.products);

module.exports = router;

