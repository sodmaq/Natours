const express = require('express');
const reviewController = require('./../controller.js/reviewController');
const authController = require('./../controller.js/authController');

const router = express.Router({ mergeParams: true });

    
router.use(authController.protect)
router
  .route('/')
  .get(reviewController.getAllReview)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .delete(reviewController.deleteReview)
  .patch(authController.restrictTo('user'),reviewController.updateReview);

module.exports = router;
