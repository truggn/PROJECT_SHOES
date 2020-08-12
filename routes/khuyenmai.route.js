var express = require('express');
var khuyenmaiCtrl  = require('../controller/khuyenmai.controller');
const { route } = require('./products.route');


var router = express.Router();

router.get('/khuyen-mai', khuyenmaiCtrl.khuyenmai);

module.exports = router;