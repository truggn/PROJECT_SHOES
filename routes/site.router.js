const express = require('express');

const siteController = require('../controller/site.controller');

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

// GET logout.
router.get('/logout', function(req, res, next) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });



module.exports = router;