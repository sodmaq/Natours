const express = require('express');
const reviewController = require('./../controller/reviewController');
const authController = require('./../controller.js/authController');


const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllReview)
  .post(authController.protect,authController.restrictTo(''),reviewController.createReview);

module.exports = router;