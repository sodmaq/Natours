/* eslint-disable */
import Stripe from 'stripe';
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51OCqxwFq8iAsB7W27KQ7uAxGekKR01N6gyHgue4FMLXEzLbYUvnMLdMLGO8W6GhhACRDT1x6920sJR5wrmx2eFsW00E5a7fWoa'
);

export const bookTour = async tourId => {
    try {
      // 1) Get checkout session from API
      const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
      // console.log(session);
  
      // 2) Create checkout form + chanre credit card
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id
      });
    } catch (err) {
      console.log(err);
      showAlert('error', err);
    }
  };