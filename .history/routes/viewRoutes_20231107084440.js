const express = require('express');
const viewsController = require('../controller.js/viewsController');
const authController = require('../controller.js/authController')

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/tour/:slug', authController.protectviewsController.getTour);
router.get('/login',viewsController.getLoginForm)

module.exports = router;
