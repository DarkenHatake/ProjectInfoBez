import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Main from './components/Main'; // Главная страница
import Object from './components/Object'; // Страница "Предметы"
import PersonalTasks from './components/PersonalTasks'; // Страница "Личные задачи"
import Profile from './components/Profile'; // Страница "Профиль"
import Navigation from './components/Navigation'; // Импортируем компонент навигации
import Login from './components/Login'; // Временный компонент авторизации
import Register from './components/Register'; // Временный компонент регистрации

// Главный компонент приложения
const App = () => {
  return (
    <div className="app">
      <Router>
        <div>
          {/* Навигация */}
          <Navigation />

          {/* Маршруты */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/objects" element={<Object />} />
            <Route path="/personal-tasks" element={<PersonalTasks />} />
            <Route path="/profile" element={<Profile />} />
            {/* Временные маршруты для проверки */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App; // Экспортируем главный компонент приложения