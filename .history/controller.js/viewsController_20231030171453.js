const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');


exports.getOverview = catchAsync(async (req, res, next) => {
  // 1) Get tour data from collections
  const tours = await Tour.find();
  const formattedDate = tours.startDates[0].toLocaleString('en-us', {
    month: 'long',
    year: 'numeric',
  });
  //  2) Build template
  //  3) Render the template using data from 1
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
    formattedDate,
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker',
  });
};
