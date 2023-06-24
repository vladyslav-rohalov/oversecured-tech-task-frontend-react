import axios from 'axios';
import { httpError } from './httpError';
import { notifySucces } from './notify';

// const API_URL = 'https://fchcqj2ahh.execute-api.eu-central-1.amazonaws.com';

const { REACT_APP_API_URL } = process.env;

axios.defaults.baseURL = REACT_APP_API_URL;

export async function login(credentials) {
  try {
    const response = await axios.post('/users/login', credentials);
    localStorage.setItem(
      'user',
      JSON.stringify({
        token: response.data.token,
        email: response.data.user.email,
      })
    );
    return response;
  } catch (error) {
    httpError(error.response.status);
  }
}

export async function register(credentials) {
  try {
    const response = await axios.post('/users/register', credentials);
    notifySucces('User is successfully registered, you can log in');
    return response;
  } catch (error) {
    httpError(error.response.status);
  }
}

export async function currentUser() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await axios.get('/users/current');
    return response;
  } catch (error) {}
}

export async function logOut() {
  const { token } = JSON.parse(localStorage.getItem('user'));
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = '';
    localStorage.setItem('user', JSON.stringify(''));
    window.location.reload();
    return response;
  } catch (error) {
    httpError(error.response.status);
  }
}
