import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsStyles/Navigation.css';

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="nav-left-group">
                    <NavLink to="/" text="Главная" />
                    <NavLink to="/objects" text="Предметы" active />
                    <NavLink to="/personal-tasks" text="Личные задачи" />
                </div>
                
                <div className="nav-right-group">
                    <NavLink to="/profile" text="Профиль" profile />
                </div>
            </div>
            <div className="nav-spacer"></div>
        </>
    );
};

const NavLink = ({ to, text, active = false, profile = false }) => (
    <div className={`nav-item ${active ? 'active' : ''} ${profile ? 'profile-item' : ''}`}>
        <Link to={to}>{text}</Link>
    </div>
);

export default Navigation;