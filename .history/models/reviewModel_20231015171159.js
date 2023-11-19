const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required:[true,'Review cannot be empty']
  },
  rating: {
    type: Number,
    
  },
  createdAt: Date,

});
