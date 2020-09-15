const express = require('express');
const multer = require('multer');

const adminController = require('../controller/admin.controller');

const upload = multer({ dest: './public/uploads/' });

const router = express.Router();

router.get('/addproduct' , adminController.index);

router.get('/updateproduct' , adminController.update);



router.post('/addproduct' ,upload.single('image'), adminController.createProduct);


module.exports = router;