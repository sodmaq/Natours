const Tour = require('../models/tourModel')
const catchAsync = require('../utils/catchAsync')


exports.getOverview = catchAsync(asy(req, res, next) => {


  res.status(200).render('overview', {
    title: 'All Tours',
  });
};

exports.getTour = (req, res) => {
    res.status(200).render('tour', {
      title: 'The Forest Hiker',
    });
  }
