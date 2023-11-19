const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllReview = catchAsync(async (req, res, next) => {

    const review = await Review.find();

    return res.status(200).json({
        status:'success',
        data:{
            
        }
    })
});
