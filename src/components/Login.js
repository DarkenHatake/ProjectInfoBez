import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/Login.css';
import { loginUser } from '../api'; // Импортируем функцию запроса

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(login, password);
      console.log('Ответ сервера:', response.data);
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <p className="login-title">Авторизация</p>
        <p className="switch-text">Нет аккаунта?</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className="input-group password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <div className="buttons">
          <button type="button" className="back-button">Назад</button>
          <button type="submit" className="login-button">Войти</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
