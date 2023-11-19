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
  .get(boo.getAllUsers)
  .post(boo.createUser);
router
  .route('/:id')
  .get(boo.getUser)
  .patch(boo.updateUser)
  .delete(boo.deleteUser);

module.exports = router;
