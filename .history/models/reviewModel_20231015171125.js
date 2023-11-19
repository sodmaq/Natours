const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required:[true,]
  },
  rating: {
    type: Number,
  },
  createdAt: Date,

});
