const express = require('express');
const viewsController = require('../controller.js/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/tour/:d', viewsController.getTour);

module.exports = router;
