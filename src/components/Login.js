import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Импортируем иконки глаза
import './ComponentsStyles/Login.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Состояние для видимости пароля

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Логин:', login, 'Пароль:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Переключаем видимость пароля
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Авторизация</h2>
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
            type={showPassword ? 'text' : 'password'} // Переключаем тип поля
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Иконка глаза */}
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