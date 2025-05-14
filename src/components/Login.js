// Login.js

import React, { useState } from 'react';
import { loginUser } from '../api'; // Зависит от твоего пути к api.js

const Login = ({ onAuthed }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await loginUser(login, password);

      // Сохраняем токен в localStorage
      localStorage.setItem('token', response.data.JWT);

      // Уведомляем родителя, что пользователь авторизован
      if (onAuthed) onAuthed();

    } catch (err) {
      console.error('Ошибка входа:', err);
      setError('Неверный логин или пароль');
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="login-login-container">
        <h2>Вход</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
          />
          <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : 'Войти'}
          </button>
        </form>
      </div>
  );
};

export default Login;