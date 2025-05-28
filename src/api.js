// api.js

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

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

export const getSubjectByID = async (id) => {
  return api.get('subjects/' + id);
};

// Создать новый предмет
export const createSubject = (title,description) => {
  return api.post('subjects', { title,description });
};
export const updateSubject = (subjectId, title,description) => {
  return api.post(`subjects/${subjectId}`, { title,description });
};
// Присоединиться к предмету по коду
export const joinSubjectByCode = (id,code) => {
  return api.post(`subjects/subscribe`, { invitationCode: code });
};

// Присоединиться к предмету по коду
export const deleteSubject = (id) => {
  return api.delete(`subjects/${id}`);
};

// ====== ЗАДАЧИ ПО ПРЕДМЕТУ ======
// Получить задачи предмета
export const getTasksBySubjectId = (subjectId) => {
  console.log("SubjectID: ", subjectId)
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
export const updateSubjectTask = (subjectId, taskId, title, description, deadline) => {
  return api.put(`subjects/${subjectId}/tasks/${taskId}`,{title, description, deadline});
};

// Удалить задачу предмета
export const deleteSubjectTask = (subjectId, taskId) => {
  return api.delete(`subjects/${subjectId}/tasks/${taskId}`);
};

// Отметить задачу выполненной / сданной
export const markSubjectTaskDone = (subjectId, taskId) => {
  return api.put(`subjects/${subjectId}/tasks/${taskId}/done`, { isDone: true });
};

// Отметить задачу выполненной / сданной
export const markSubjectTaskPassed = (subjectId, taskId) => {
  return api.put(`subjects/${subjectId}/tasks/${taskId}/pass`, { isPassed: true });
};

// ====== ПЕРСОНАЛЬНЫЕ ЗАДАЧИ ======
// Получить все персональные задачи
export const getAllPersonalTasks = () => {
  return api.get('personal-tasks');
};
// Отметить задачу выполненной / сданной
export const markPersonalTaskDone = ( taskId) => {
  return api.put(`personal-tasks/${taskId}/pass`, { isPassed: true });
};
// Получить персональную задачу по ID
export const getPersonalTaskById = (taskId) => {
  return api.get(`personal-tasks/${taskId}`);
};

// Создать персональную задачу
export const createPersonalTask = (title, description, deadline) => {
  return api.post('personal-tasks', { title, description, deadline});
};

// Обновить персональную задачу
export const updatePersonalTask = (taskId, title = "", description = "", deadline = "") => {
  return api.put(`personal-tasks/${taskId}`, {title:title, description:description, deadline:deadline});
};

// Удалить персональную задачу
export const deletePersonalTask = (taskId) => {
  return api.delete(`personal-tasks/${taskId}`);
};

// ====== ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ ======
// Получить данные профиля
export const getProfile = () => {
  return api.get('auth/profile');
};

export default api;