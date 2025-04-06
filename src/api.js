import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

export const loginUser = (username, password) => {
  console.log(API_URL + "auth/sign-in");
  return axios.post(`${API_URL}auth/sign-in`, {
    "username": username,
    "password": password
  });
};

export const registerUser = (email, username, password) => {
  return axios.post(`${API_URL}auth/sign-up`, {
    "email":email,
    "username": username,
    "password": password
  });
};

export const createSubject = (title, description, deadline) => {
  // Извлечение токена из localStorage
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Токен не найден в localStorage');
  }

  // Отправка POST-запроса с Bearer токеном
  return axios.post(`${API_URL}subjects`, {
    "title":title,
    "description":description,
    "deadline": deadline,
  }, {
    headers: {
      Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
    },
  });
};

export const getSubjects = () => {
  // Извлечение токена из localStorage
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Токен не найден в localStorage');
  }

  // Отправка GET-запроса с Bearer токеном
  return axios.get(`${API_URL}subjects`, {
    headers: {
      Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
    },
  });
};