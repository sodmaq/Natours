const express = require('express');
const viewsController = require('../controller.js/viewsController');
const authController = require('../controller.js/authController')

const router = express.Router();

router.use(authController.is)

router.get('/', viewsController.getOverview);
router.get('/tour/:slug', viewsController.getTour);
router.get('/login',viewsController.getLoginForm)

module.exports = router;
