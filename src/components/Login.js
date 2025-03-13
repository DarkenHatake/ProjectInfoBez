import React, { useState } from 'react';
import './ComponentsStyles/Login.css';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Логин:', login, 'Пароль:', password);
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
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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