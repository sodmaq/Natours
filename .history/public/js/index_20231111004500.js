import '@babel/polyfill';
import axios from 'axios';
import { login } from './login';
import {}

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});
