const Tour = require('../models/tourModel');
const Review = require('../models/reviewModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collections
  const tours = await Tour.find();
  //  2) Build template
  //  3) Render the template using data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  try {
    // 1) Get the data for the requested tour (including reviews and guides)
    const tour = await Tour.findOne({ slug: req.params.slug })
      .populate({
        path: 'reviews',
        select: 'review rating user',
      })
      .populate({
        path: 'guides',
        select: 'name email role photo',
      });

    if (!tour) {
      return next(new AppError('There is no tour with that name.', 404));
    }

    // Log the tour and review data for debugging
    console.log('Tour Data:', tour);
    if (tour.reviews) {
      console.log('Review Data:', tour.reviews);
    }

    // 2) Build template
    // 3) Render the template using data from 1
    res.status(200).render('tour', {
      title: `${tour.name} Tour`,
      tour,
    });
  } catch (err) {
    // Handle any errors that might occur during processing
    return next(err);
  }
});
