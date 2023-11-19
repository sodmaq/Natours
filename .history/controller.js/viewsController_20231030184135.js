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

exports.getTour = (req, res) => {
  //1) get data for the requested tour (including reviews and guide)
    

  // 2) build template

  // 3) render Template using data from 1

  res.status(200).render('tour', {
    title: 'The Forest Hiker',
  });
};
