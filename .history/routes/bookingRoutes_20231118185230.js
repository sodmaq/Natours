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
  .get(bookingController.getAllUsers)
  .post(bookingController.createUser);
router
  .route('/:id')
  .get(bookingController.getUser)
  .patch(bookingController.updateUser)
  .delete(bookingController.deleteUser);

module.exports = router;
