const express = require('express');
const viewsController = require('../controller.js/viewsController');
const authController = require('../controller.js/authController');

const router = express.Router();

router.use();

router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn,viewsController.getTour);
router.get('/login', authController.isLoggedInviewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);

module.exports = router;
