const express = require('express');

const router = express.Router();

const homeController = require('../controller/home.controller');

router.use('/:slug', homeController.show); 
router.use('/' , homeController.index);



module.exports = router;