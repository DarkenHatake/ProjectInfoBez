import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/PasswordReset.css';
import api from '../api';

const PasswordReset = ({ onClose }) => {
  // Состояния для разных этапов сброса пароля
  const [stage, setStage] = useState('email'); // email -> code -> newPassword -> success
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Отправляем запрос на сервер для отправки кода подтверждения
      await api.post('auth/request-password-reset', { email });
      setStage('code');
    } catch (err) {
      setError(err.response?.data?.message || 'Ошибка при отправке кода');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitCode = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Проверяем код подтверждения
      await api.post('auth/verify-reset-code', { email, code });
      setStage('newPassword');
    } catch (err) {
      setError(err.response?.data?.message || 'Неверный код подтверждения');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitNewPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (newPassword !== repeatPassword) {
      setError('Пароли не совпадают');
      setLoading(false);
      return;
    }
    
    try {
      // Отправляем новый пароль
      await api.post('auth/reset-password', { email, code, newPassword });
      setStage('success');
    } catch (err) {
      setError(err.response?.data?.message || 'Ошибка при смене пароля');
    } finally {
      setLoading(false);
    }
  };

  const renderEmailStage = () => (
    <form onSubmit={handleSubmitEmail}>
      <h2>Восстановление пароля</h2>
      <p>Введите email, указанный при регистрации</p>
      
      {error && <div className="password-reset-error">{error}</div>}
      
      <div className="password-reset-input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div className="password-reset-buttons">
        <button
          type="button"
          className="password-reset-back-button"
          onClick={onClose}
          disabled={loading}
        >
          Назад
        </button>
        <button
          type="submit"
          className="password-reset-button"
          disabled={loading}
        >
          {loading ? 'Отправка...' : 'Отправить код'}
        </button>
      </div>
    </form>
  );

  const renderCodeStage = () => (
    <form onSubmit={handleSubmitCode}>
      <h2>Подтверждение</h2>
      <p>Введите код, отправленный на {email}</p>
      
      {error && <div className="password-reset-error">{error}</div>}
      
      <div className="password-reset-input-group">
        <input
          type="text"
          placeholder="Код подтверждения"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>
      
      <div className="password-reset-buttons">
        <button
          type="button"
          className="password-reset-back-button"
          onClick={() => setStage('email')}
          disabled={loading}
        >
          Назад
        </button>
        <button
          type="submit"
          className="password-reset-button"
          disabled={loading}
        >
          {loading ? 'Проверка...' : 'Подтвердить'}
        </button>
      </div>
    </form>
  );

  const renderNewPasswordStage = () => (
    <form onSubmit={handleSubmitNewPassword}>
      <h2>Новый пароль</h2>
      <p>Придумайте новый пароль для аккаунта {email}</p>
      
      {error && <div className="password-reset-error">{error}</div>}
      
      <div className="password-reset-input-group password-reset-password-input">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Новый пароль"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength="6"
        />
        <span
          className="password-reset-password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
      </div>
      
      <div className="password-reset-input-group">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Повторите пароль"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
      </div>
      
      <div className="password-reset-buttons">
        <button
          type="button"
          className="password-reset-back-button"
          onClick={() => setStage('code')}
          disabled={loading}
        >
          Назад
        </button>
        <button
          type="submit"
          className="password-reset-button"
          disabled={loading}
        >
          {loading ? 'Сохранение...' : 'Сохранить'}
        </button>
      </div>
    </form>
  );

  const renderSuccessStage = () => (
    <div className="password-reset-success">
      <h2>Пароль успешно изменен!</h2>
      <p>Теперь вы можете войти в систему с новым паролем.</p>
      <button
        className="password-reset-button"
        onClick={onClose}
      >
        Закрыть
      </button>
    </div>
  );

  return (
    <div className="password-reset-container">
      {stage === 'email' && renderEmailStage()}
      {stage === 'code' && renderCodeStage()}
      {stage === 'newPassword' && renderNewPasswordStage()}
      {stage === 'success' && renderSuccessStage()}
    </div>
  );
};

export default PasswordReset;