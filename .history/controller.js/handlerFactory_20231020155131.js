const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    // try {
    const doc = await Model.findByIdAndDelete(req.params.id, req.body);

    if (!doc) {
      return next(new AppError(`No document found with that ID`, 404));
    }
    return res.status(204).json({
      status: 'success',
      data: null,
    });
  });


exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    // try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError(`No Document found with that ID`, 404));
    }

    return res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });


exports.createOne = Model => catchAsync(async (req, res, next) => {
  const doc = await Model.create(req.body);

  return res.status(201).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
 
});


exports.getOne = (Model,popOPtions) => exports.getTour = catchAsync(async (req, res, next) => {
  // try {
  const tour = await Tour.findById(req.params.id).populate('reviews')

  if (!tour) {
    return next(new AppError(`No Tour found with that ID`, 404));
  }

  return res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
  // } catch (err) {
  //   res.status(400).json({
  //     status: 'fail',
  //     message: err,
  //   });
  // }
});