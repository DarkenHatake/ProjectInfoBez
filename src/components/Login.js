import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/Login.css';
import { loginUser } from '../api'; // Импортируем функцию запроса

const Login = ({ onClose, onRegister, onAuthed }) => { // Принимаем onClose через пропсы
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(login, password);
      localStorage.setItem('token', response.data.JWT);
      console.log('Ответ сервера:', response.data);
      onAuthed();
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    }
  };

  return (
      <div className="login-login-container">
        <div className="login-login-header">
          <p className="login-login-title">Авторизация</p>
          <button onClick={onRegister}><p className="login-switch-text">Нет аккаунта?</p></button>
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
          <div className="login-input-group password-input">
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
            {/* Кнопка "Назад" вызывает функцию onClose */}
            <button type="button" className="login-back-button" onClick={onClose}>
              Назад
            </button>
            <button type="submit" className="login-button">Войти</button>
          </div>
        </form>
      </div>
  );
};

export default Login;