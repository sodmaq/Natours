const express = require('express');
const viewsController = require('../controller.js/viewsController');
const authController = require('../controller.js/authController');

const router = express.Router();

router.use(authController.isLoggedIn);

router.get('/', viewsController.getOverview);
router.get('/tour/:slug', viewsController.getTour);
router.get('/login', viewsController.getLoginForm);
router.get('/me', viewsController.getA);

module.exports = router;
