var express = require('express');
var homeCtrl = require('../controller/home.controller');

var router = express.Router();

router.get('/home', homeCtrl.home);
router.get('/login' , homeCtrl.login);
router.get('/register' , homeCtrl.register)

module.exports = router;