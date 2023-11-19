import '@babel/polyfill';
import { login, logout } from './login';
import { displayMap } from './mapBox';
import {updateData} from './updateSettings'

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const genericForm = document.querySelector('.form--login'); // Be more specific if needed
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector()

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    // Prevent default behavior
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (genericForm) {
  genericForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);
