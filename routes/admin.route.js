const express = require('express');
const multer = require('multer');

const adminController = require('../controller/admin.controller');

const upload = multer({ dest: './public/uploads/' });

const router = express.Router();

router.get('/addproduct' , adminController.addproduct); // view thêm bản ghi

router.get('/page-admin' , adminController.home); // view update va sua bản ghi

router.post('/handle-form-action' , adminController.handleFormAction);

router.post('/form-action', adminController.actionFormTrash)

router.delete('/:id' , adminController.delete); // xóa bản ghi , bản ghi đó có thể revert

router.delete('/:id/force' , adminController.deleteForce);// xóa vĩnh viễn bản ghi đó

router.get('/page-admin/:id/edit' , adminController.edit); //view sửa bản ghi

router.put('/page-admin/:id' , adminController.putupdate); // update bản ghi 

router.post('/addproduct' ,upload.single('image'), adminController.createProduct); // thêm bản ghi mới vào db

router.get('/trash' , adminController.trashProduct); // view xem các bản ghi đã xóa trước đó

router.patch('/:id/revert' , adminController.revertProcduct); // phục hồi lại các bản ghi đã được xóa.

module.exports = router;