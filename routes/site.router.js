const express = require('express');

const siteController = require('../controller/site.controller');
const authMiddleware = require('../middleware/auth.middleware');

const {UserValidator} = require('../validate/register.validate');

const router = express.Router();

// [GET] / register
router.get('/register', siteController.register);
//[POST] / Register
router.post('/register', siteController.createPostUser);
//[GET] / login
router.get('/login' , siteController.login);
// [POST] // login

router.post('/login' , siteController.postLogin);



module.exports = router;