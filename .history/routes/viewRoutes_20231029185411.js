const express = require('express');
const viewsController = require('../controller.js/viewsController')

const router = express.Router();



  
  router.get('/overview', viewsController.getOverview);
  
  router.get('/tour', (req, res) => {
    res.status(200).render('tour', {
      title: 'The Forest Hiker',
    });
  });

module.exports = router;