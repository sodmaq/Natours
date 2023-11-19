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
    tour,
  });
});

exports.getTour = catchAsync(async (req, res) => {
  //1) get data for the requested tour (including reviews and guide)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });
  // 2) build template

  // 3) render Template using data from 1

  res.status(200).render('tour', {
    title: 'The Forest Hiker',
    tour
  });
});