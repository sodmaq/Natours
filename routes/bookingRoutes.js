const express = require('express');
const bookingController = require('../controller.js/bookingController');
const authController = require('../controller.js/authController');

const router = express.Router();

// Protecting all routes
router.use(authController.protect);

// Get Checkout session from stripe
router.get('/checkout-session/:tourId', bookingController.getCheckoutSession);

// Restricting routes
router.use(authController.restrictTo('admin', 'lead-guides'));

router
  .route('/')
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
