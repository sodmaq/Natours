const express = require('express');
const reviewController = require('./../controller.js/reviewController');
const authController = require('./../controller.js/authController');

const router = express.Router({mer});

router
  .route('/')
  .get(reviewController.getAllReview)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

module.exports = router;
