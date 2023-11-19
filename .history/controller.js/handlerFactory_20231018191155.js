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



