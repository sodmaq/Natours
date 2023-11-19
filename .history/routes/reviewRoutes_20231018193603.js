const express = require('express');
const reviewController = require('./../controller.js/reviewController');
const authController = require('./../controller.js/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewController.getAllReview)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

  router.route('/')

module.exports = router;
