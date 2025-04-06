import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './ComponentsStyles/Navigation.css';

const Navigation = () => {
    const [isModalLoginOpen, setModalLoginOpen] = useState(false);
    const key = 0;
    const handleOpenModalLogin = () => {
        setModalLoginOpen(true);
    };

    const handleCloseModalLogin = () => {
        setModalLoginOpen(false);
    };

    return (
        <>
            <div className="navigation">

                <div className="nav-left-group">
                    <NavLink to="/" text="Главная" />
                    <NavLink to="/objects" text="Предметы" active />
                    <NavLink to="/personal-tasks" text="Личные задачи" />

                </div>
                <div className="nav-right-group">
                    {key === 1 ? (
                        // Оставь пустое место для кода
                        <button className="navigation-login-button" onClick={handleOpenModalLogin}>Авторизация</button>
                    ) : (
                        <NavLink to="/profile" text="Профиль" profile />
                    )}
                    {isModalLoginOpen && (<Login onClose={handleCloseModalLogin}/>)}
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