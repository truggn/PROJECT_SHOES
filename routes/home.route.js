const express = require('express');
const homeCtrl = require('../controller/home.controller');

const router = express.Router();

router.get('/home', homeCtrl.home);

router.get('/login' , homeCtrl.login);

router.get('/register' , homeCtrl.register);

router.post('/register' , homeCtrl.createPostUser);



module.exports = router;