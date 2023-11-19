const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');


exports.deleteOne = Model => catchAsync(async (req, res, next) => {
    // try {
    const doc =await Model.findByIdAndDelete(req.params.id, req.body);
  
    if (!doc) {
      return next(new AppError(`No document found with that ID`, 404));
    }
    return res.status(204).json({
      status: 'success',
      data: null,
    });
    
});
exports.updateOne = Model =



exports.updateTour = catchAsync(async (req, res, next) => {
    // try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
  
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
  