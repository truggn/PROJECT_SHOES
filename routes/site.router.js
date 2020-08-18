const express = require('express');

const router = express.Router();

const siteController = require('../controller/site.controller');
// [GET] / register
router.get('/register', siteController.register);
//[POST] / Register
router.post('/register', siteController.createPostUser);
//[GET] / login
router.get('/login' , siteController.login);




module.exports = router;