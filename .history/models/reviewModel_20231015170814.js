const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
  },
  rating:{
    type:Number
  }
  createdAt
});
