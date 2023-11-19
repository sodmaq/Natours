const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review cannot be empty'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'review must belong to a Tour'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'review must belong to a user'],
    },
  },
  { toJSON: { virtuals: true } },
  { toObject: { virtuals: true } }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: 'tour', select: 'name' }).populat
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;