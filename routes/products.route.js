var express = require('express');
var productsCtrl = require('../controller/products.controller');

var router = express.Router();

router.get('/products' , productsCtrl.products);

module.exports = router;

