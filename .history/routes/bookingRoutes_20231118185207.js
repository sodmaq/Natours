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
  .get(bookingCo.getAllUsers)
  .post(bookingCo.createUser);
router
  .route('/:id')
  .get(bookingCo.getUser)
  .patch(bookingCo.updateUser)
  .delete(bookingCo.deleteUser);

module.exports = router;
