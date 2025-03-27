import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Импортируем иконки глаза
import './ComponentsStyles/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Состояние для видимости пароля
  const [showRepeatPassword, setShowRepeatPassword] = useState(false); // Состояние для видимости повторного пароля

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Username:', username, 'Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Переключаем видимость пароля
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword); // Переключаем видимость повторного пароля
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
        <div className="input-group password-input">
          <input
            type={showRepeatPassword ? 'text' : 'password'} // Переключаем тип поля
            placeholder="Repeat password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={toggleRepeatPasswordVisibility}>
            {showRepeatPassword ? <FaEye /> : <FaEyeSlash />} {/* Иконка глаза */}
          </span>
        </div>
        <div className="buttons">
          <button type="button" className="back-button">Назад</button>
          <button type="submit" className="register-button" onClick={()=>
            {
              if (repeatPassword === password){
                //dont send repeatPassword to back-end
                //TODO request for register. Using axios.post. Better relocate all requests to another file.
              }
            }
            }>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default Register;