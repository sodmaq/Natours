const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllReview = catchAsync(async (req, res, next) => {
  let filter = {}
  if(req.params.tourid)
  const reviews = await Review.find();

  return res.status(200).json({
    status: 'success',
    data: {
      reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  //allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  const newReview = await Review.create(req.body);

  return res.status(200).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});