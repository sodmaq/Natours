import axios from 'axios';
import { showAlert } from './alerts';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in Successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    if (res.data.status === 'success') {
      // Navigate to the login page after a short delay
      setTimeout(() => {
        window.location.href = '/login'; // Adjust the login page URL
      }, 500); // 500 milliseconds delay

      // Reload the page after a further delay
      setTimeout(() => {
        window.location.reload();
      }, 500); // 500 milliseconds delay
    }
  } catch (err) {
    showAlert('error', 'Errro logging out, Try Again!');
  }
};
