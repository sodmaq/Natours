import '@babel/polyfill';
import axios from 'axios';
import { login } from './login';
import { displayMap } from './mapBox';

const locations = JSON.parse(document.getElementById('map').dataset.locations);
display

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
