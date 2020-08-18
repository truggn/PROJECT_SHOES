const express = require('express');

const router = express.Router();

const homeController = require('../controller/home.controller');

router.get('/:slug', homeController.show); 
router.get('/' , homeController.index);



module.exports = router;