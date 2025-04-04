import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/Login.css';
import { loginUser } from '../api';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // <-- управление видимостью

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(login, password);
      console.log('Ответ сервера:', response.data);
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    }
  };

  if (!isVisible) return null; // <-- скрываем компонент, если он "закрыт"

  return (
    <div className="login-login-container">
      <div className="login-login-header">
        <p className="login-login-title">Авторизация</p>
        <p className="login-switch-text">Нет аккаунта?</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-input-group">
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="login-input-group login-password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="login-password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <div className="login-buttons">
          <button
            type="button"
            className="login-back-button"
            onClick={() => setIsVisible(false)} // <-- при нажатии скрываем окно
          >
            Назад
          </button>
          <button type="submit" className="login-login-button">Войти</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
