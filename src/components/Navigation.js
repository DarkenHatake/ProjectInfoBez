import React from 'react';
import './ComponentsStyles/Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="nav-item">Главная</div>
            <div className="nav-item active">Предметы</div>
            <div className="nav-item">Личные задачи</div>
            <div className="nav-item profile">Профиль</div>
        </div>
    );
};

export default Navigation;
