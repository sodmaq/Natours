const express = require('express');
const bookingController = require('./../controller.js/reviewController');
const authController = require('./../controller.js/authController');

const router = express.Router();
router.get(
  '/getCheckoutSession/:tourId',
  authController.protect,
  bookingController.getCheckoutSession
);

module.exports = router;