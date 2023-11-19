const express = require('express');
const tourController = require('./../controller.js/tourController');
const authController = require('./../controller.js/authController');
const reviewController = require('./../controller.js/reviewController');


const router = express.Router();

// router.param('id', tourController.checkID);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);
router.route('/tour-stats').get(tourController.getTourStats);
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);
router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour
  );


  //implementing simple nested  route
  router.route('/:tourId/reviews').post(authContro)
module.exports = router;
