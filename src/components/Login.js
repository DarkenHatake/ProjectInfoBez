import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/Login.css';
import { loginUser } from '../api';

const Login = ({ onClose, onRegister, onAuthed }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(''); // Для отображения ошибок
  const [loading, setLoading] = useState(false); // Индикатор загрузки

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Сброс ошибки
    setLoading(true); // Показываем загрузку

    try {
      const response = await loginUser(login, password);
      if (response.data.token) { // Проверяем наличие токена
        localStorage.setItem('token', response.data.token);
        onAuthed(); // Авторизовали пользователя
        onClose(); // Закрываем форму
      } else {
        throw new Error('Неверный формат ответа сервера');
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      setError('Неверный логин или пароль');
    } finally {
      setLoading(false); // Скрываем загрузку
    }
  };

  return (
      <div className="login-login-container">
        <div className="login-login-header">
          <p className="login-login-title">Авторизация</p>
          <button className="login-switch-text" onClick={onRegister}>
            Нет аккаунта?
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="login-error-message">{error}</p>}
          <div className="login-input-group">
            <input
                type="text"
                placeholder="Login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required // Обязательное поле
            />
          </div>
          <div className="login-input-group password-input">
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Обязательное поле
            />
            <span
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
            >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
          </div>
          <div className="login-buttons">
            <button
                type="button"
                className="login-back-button"
                onClick={onClose}
                disabled={loading} // Блокируем кнопку при загрузке
            >
              Назад
            </button>
            <button
                type="submit"
                className="login-button"
                disabled={loading} // Блокируем кнопку при загрузке
            >
              {loading ? 'Входим...' : 'Войти'} {/* Индикатор загрузки */}
            </button>
          </div>
        </form>
      </div>
  );
};

export default Login;