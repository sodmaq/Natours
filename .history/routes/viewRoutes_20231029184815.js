const express = require('express');
const viewsController = require('../controller.js/')

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).render('base', {
      tour: 'The forest Hiker',
      user: 'sodmaq',
    });
  });
  
  router.get('/overview', );
  
  router.get('/tour', (req, res) => {
    res.status(200).render('tour', {
      title: 'The Forest Hiker',
    });
  });

module.exports = router;