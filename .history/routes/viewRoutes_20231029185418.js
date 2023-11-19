const express = require('express');
const viewsController = require('../controller.js/viewsController')

const router = express.Router();



  
  router.get('/overview', viewsController.getOverview);
  
  router.get('/tour', );

module.exports = router;