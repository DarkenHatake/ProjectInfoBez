// Register.js

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/Register.css';
import { registerUser } from '../api';

const Register = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    // email: '',
    username: '',
    password: '',
    repeatPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const { /*email*/ username, password, repeatPassword } = formData;

    if (/*!email || */!username || !password || !repeatPassword) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    if (password !== repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      await registerUser(/*email,*/ username, password);
      onLogin(); // Переходим на экран входа
      setIsVisible(false); // Скрываем форму регистрации
    } catch (err) {
      // setError(err.response?.data?.message || 'Ошибка регистрации');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="register-modal-overlay">
      <div className={`register-container ${error ? 'register-with-error' : ''}`}>
        <div className="register-header">
          <h2>Регистрация</h2>
          <button className="register-switch-text" onClick={onLogin}>Есть аккаунт?</button>
        </div>

        {error && <div className="register-error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          {/*<div className="register-input-group">
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
          </div>*/}

          <div className="register-input-group">
            <input
                type="text"
                name="username"
                placeholder="Логин"
                value={formData.username}
                onChange={handleChange}
                required
            />
          </div>

          <div className="register-input-group register-password-input">
            <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
            />
            <span
                className="register-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          </div>

          <div className="register-input-group register-password-input">
            <input
                type={showRepeatPassword ? 'text' : 'password'}
                name="repeatPassword"
                placeholder="Повторите пароль"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
            />
            <span
                className="register-password-toggle"
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            >
            {showRepeatPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          </div>

          <div className="register-buttons">
            <button
                type="button"
                className="register-back-button"
                onClick={() => setIsVisible(false)}
            >
              Назад
            </button>
            <button type="submit" className="register-button">
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;