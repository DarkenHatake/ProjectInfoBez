import React, { useState } from 'react';
import './ComponentsStyles/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Username:', username, 'Password:', password);
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h2>Регистрация</h2>
        <p className="switch-text">Есть аккаунт?</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <div className="input-group">
          <input
            type="password"
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="button" className="back-button">Назад</button>
          <button type="submit" className="register-button">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default Register;