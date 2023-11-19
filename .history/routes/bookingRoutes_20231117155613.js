const express = require('express');
const bookingController = require('./../controller.js/Controller');
const authController = require('./../controller.js/authController');

const router = express.Router();
router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingController.getCheckoutSession
);

module.exports = router;