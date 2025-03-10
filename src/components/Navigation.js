import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link для навигации
import './ComponentsStyles/Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="nav-item">
                <Link to="/">Главная</Link>
            </div>
            <div className="nav-item active">
                <Link to="/objects">Предметы</Link>
            </div>
            <div className="nav-item">
                <Link to="/personal-tasks">Личные задачи</Link>
            </div>
            <div className="nav-item profile">
                <Link to="/profile">Профиль</Link>
            </div>
        </div>
    );
};

export default Navigation;