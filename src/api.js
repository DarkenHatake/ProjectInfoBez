// api.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/';

// Создаем экземпляр Axios с базовым URL
const api = axios.create({
  baseURL: API_URL,
});

// Перехватчик для добавления токена к каждому запросу
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// ====== АВТОРИЗАЦИЯ ======
// Регистрация
export const registerUser = (username, password) => {
  return api.post('auth/register', { username, password });
};

// Логин
export const loginUser = (username, password) => {
  return api.post('auth/login', { username, password });
};

// ====== ПРЕДМЕТЫ ======
// Получить все предметы
export const getSubjects = () => {
  return api.get('subjects');
};

// Создать новый предмет
export const createSubject = (title) => {
  return api.post('subjects', { title });
};

// Присоединиться к предмету по коду
export const joinSubjectByCode = (code) => {
  return api.post('subjects/3/subscribe', { invitationCode: code });
};

// ====== ЗАДАЧИ ПО ПРЕДМЕТУ ======
// Получить задачи предмета
export const getTasksBySubjectId = (subjectId) => {
  return api.get(`subjects/${subjectId}/tasks`);
};

// Создать задачу для предмета
export const createSubjectTask = (subjectId, title, description, deadline) => {
  return api.post(`subjects/${subjectId}/tasks`, {
    title,
    description,
    deadline,
  });
};

// Обновить задачу предмета
export const updateSubjectTask = (subjectId, taskId, data) => {
  return api.put(`subjects/${subjectId}/tasks/${taskId}`, data);
};

// Удалить задачу предмета
export const deleteSubjectTask = (subjectId, taskId) => {
  return api.delete(`subjects/${subjectId}/tasks/${taskId}`);
};

// Отметить задачу выполненной / сданной
export const markSubjectTaskDone = (subjectId, taskId) => {
  return api.put(`subjects/${subjectId}/tasks/${taskId}/done`, { isDone: true });
};

// ====== ПЕРСОНАЛЬНЫЕ ЗАДАЧИ ======
// Получить все персональные задачи
export const getAllPersonalTasks = () => {
  return api.get('personal-tasks');
};

// Получить персональную задачу по ID
export const getPersonalTaskById = (taskId) => {
  return api.get(`personal-tasks/${taskId}`);
};

// Создать персональную задачу
export const createPersonalTask = (title, description) => {
  return api.post('personal-tasks', { title, description });
};

// Обновить персональную задачу
export const updatePersonalTask = (taskId, data) => {
  return api.put(`personal-tasks/${taskId}`, data);
};

// Удалить персональную задачу
export const deletePersonalTask = (taskId) => {
  return api.delete(`personal-tasks/${taskId}`);
};

// ====== ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ ======
// Получить данные профиля
export const getProfile = () => {
  return api.get('profile');
};

export default api;