const express = require('express');
const reviewController = require('./../controller/reviewController');

const router = express.Router();

router.route('/').get(reviewController.getAllReview).post(reviewController.c)



module.exports = router;