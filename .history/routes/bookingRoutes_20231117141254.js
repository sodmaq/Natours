const express = require('express');
const reviewController = require('./../controller.js/reviewController');
const authController = require('./../controller.js/authController');

const router = express.Router({ mergeParams: true });



module.exports = router;
