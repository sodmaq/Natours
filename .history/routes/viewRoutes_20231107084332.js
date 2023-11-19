const express = require('express');
const viewsController = require('../controller.js/viewsController');
const authController = require('.//')

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/tour/:slug', viewsController.getTour);
router.get('/login',viewsController.getLoginForm)

module.exports = router;
