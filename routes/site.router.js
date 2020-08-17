const express = require('express');

const router = express.Router();

const siteController = require('../controller/site.controller');


router.use('/' , siteController.login);
router.use('/', siteController.register);



module.exports = router;