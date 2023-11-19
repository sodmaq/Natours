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
  .get(.getAllUsers)
  .post(.createUser);
router
  .route('/:id')
  .get(.getUser)
  .patch(.updateUser)
  .delete(.deleteUser);

module.exports = router;
