import axios from 'axios';
import { httpError } from './httpError';
import { notifySucces } from './notify';

const { REACT_APP_API_URL } = process.env;

axios.defaults.baseURL = REACT_APP_API_URL;

export async function createVisitor(data) {
  try {
    const response = await axios.post('/api/visitors', data);
    notifySucces('A visitor entered the building');
    return response;
  } catch (error) {
    httpError(error.response.status);
  }
}

export async function getAllVisitors() {
  try {
    const response = await axios.get('/api/visitors');
    return response;
  } catch (error) {
    httpError(error.response.status);
  }
}

export async function getVisitorById(id) {
  try {
    const { data } = await axios.get(`/api/visitors/${id}`);
    return data;
  } catch (error) {
    httpError(error.response.status);
  }
}

export async function editVisitor(id, credentials) {
  try {
    const response = await axios.put(`/api/visitors/${id}`, credentials);
    notifySucces('Visitor updated');
    if (response) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  } catch (error) {
    httpError(error.response.status);
  }
}

export async function deleteVisitor(id) {
  try {
    const response = await axios.delete(`/api/visitors/${id}`);
    notifySucces('Visitor deleted');
    if (response) {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  } catch (error) {
    httpError(error.response.status);
  }
}
