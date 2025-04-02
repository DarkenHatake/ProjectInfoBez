import axios from 'axios';

const API_URL = 'http://localhost:8000/auth';

export const loginUser = (username, password) => {
  return axios.post(`${API_URL}/sign-in`, {
    username,
    password
  });
};

export const registerUser = (email, username, password) => {
  return axios.post(`${API_URL}/sign-up`, {
    email,
    username,
    password
  });
};
