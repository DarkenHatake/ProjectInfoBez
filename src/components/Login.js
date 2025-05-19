import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/Login.css';
import { loginUser } from '../api';
import PasswordReset from './PasswordReset';

const Login = ({ onClose, onRegister, onAuthed }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await loginUser(login, password);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        onAuthed();
        onClose();
      } else {
        throw new Error('Неверный формат ответа сервера');
      }
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      setError('Неверный логин или пароль');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Оверлей для основной формы авторизации */}
      <div className="login-modal-overlay">
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
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
            <div className="login-input-group password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            <div className="login-forgot-password">
              <button 
                type="button" 
                className="login-forgot-password-link"
                onClick={() => setShowPasswordReset(true)}
              >
                Забыли пароль?
              </button>
            </div>
            <div className="login-buttons">
              <button
                type="button"
                className="login-back-button"
                onClick={onClose}
                disabled={loading}
              >
                Назад
              </button>
              <button
                type="submit"
                className="login-login-button"
                disabled={loading}
              >
                {loading ? 'Входим...' : 'Войти'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Модальное окно восстановления пароля */}
      {showPasswordReset && (
        <div className="login-modal-overlay">
          <PasswordReset 
            onClose={() => setShowPasswordReset(false)} 
          />
        </div>
      )}
    </>
  );
};

export default Login;