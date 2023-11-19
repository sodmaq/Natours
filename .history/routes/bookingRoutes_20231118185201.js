const express = require('express');
const bookingController = require('./../controller.js/bookingController');
const authController = require('./../controller.js/authController');

const router = express.Router();
router.get(
  '/checkout-session/:tourId',
  authController.protect,
  bookingController.getCheckoutSession
);
router
  .route('/')
  .get(booking.getAllUsers)
  .post(booking.createUser);
router
  .route('/:id')
  .get(booking.getUser)
  .patch(booking.updateUser)
  .delete(booking.deleteUser);

module.exports = router;
