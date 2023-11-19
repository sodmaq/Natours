const express = require('express');
const viewsController = require('../controller.js/viewsController');
const authController = require('../controller.js/authController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.post('/submit-user-data', viewsController.updateUserData);

module.exports = router;
