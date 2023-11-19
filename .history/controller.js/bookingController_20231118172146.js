const stripe = require('stripe')(process.env.STRIPE_KEY);
const Tour = require('./../models/tourModel');
const Booking = require('./../models/bookingModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
    // 1) Get the currently booked tour
    const tour = await Tour.findById(req.params.tourId);
  
    // Create a product object
    const product = await stripe.products.create({
      name: `${tour.name}`,
      description: `${tour.description}`,
      images: [
        `${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`,
      ],
    });
  
    // Define a price object
    const price = await stripe.prices.create({
      product: product.id,
      currency: 'USD',
      unit_amount: tour.price,
    });
    // console.log(price.id, product.id);
  
    //   2) Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
  
      // Add "alert=booking" query to display alerts to users
      success_url: `${req.protocol}://${req.get('host')}/my-tours?alert=booking`,
      cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
      customer_email: req.user.email,
      client_reference_id: req.params.tourId,
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: price.id,
          quantity: 1,
        },
      ],
      mode: 'payment',
    });
  
    // res.redirect(303, session.url);
  
    // 3) Create session as response
    res.status(200).json({
      status: 'success',
      session,
    });
  });

