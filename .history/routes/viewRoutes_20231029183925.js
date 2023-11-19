const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).render('base', {
      tour: 'The forest Hiker',
      user: 'sodmaq',
    });
  });
  
  router.get('/overview', (req, res) => {
    res.status(200).render('overview', {
      title: 'All Tours',
    });
  });
  
  router.get('/tour', (req, res) => {
    res.status(200).render('tour', {
      title: 'The Forest Hiker',
    });
  });

module.exports = router;