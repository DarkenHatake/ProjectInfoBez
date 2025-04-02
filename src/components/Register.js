import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './ComponentsStyles/Register.css';
import { registerUser } from '../api';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    repeatPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [error, setError] = useState('');

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

    if (formData.password !== formData.repeatPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      const response = await registerUser(formData.email, formData.username, formData.password);
      console.log('Успешная регистрация:', response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Ошибка регистрации');
    }
  };

  return (
    <div className={`register-container ${error ? 'with-error' : ''}`}>
      <div className="register-header">
        <h2>Регистрация</h2>
        <p className="switch-text">Есть аккаунт?</p>
      </div>
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
          <span 
            className="password-toggle" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        
        <div className="input-group password-input">
          <input
            type={showRepeatPassword ? 'text' : 'password'}
            name="repeatPassword"
            placeholder="Repeat password"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
          />
          <span 
            className="password-toggle" 
            onClick={() => setShowRepeatPassword(!showRepeatPassword)}
          >
            {showRepeatPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        
        <div className="buttons">
          <button type="button" className="back-button">
            Назад
          </button>
          <button type="submit" className="register-button">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;