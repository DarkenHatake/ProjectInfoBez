import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './ComponentsStyles/Navigation.css';
import Register from "./Register";

const Navigation = () => {

    const [isModalLoginOpen, setModalLoginOpen] = useState(false);
    const [isModalRegisterOpen, setModalRegisterOpen] = useState(false);
    const [isAuthed, setAuthed] = useState(false);
    const handleOpenModalRegister = () => {
        setModalLoginOpen(false);
        setModalRegisterOpen(true)
    }
    const handleCloseModalRegister = () => {
        setModalRegisterOpen(false)
    }
    const handleOpenModalLogin = () => {
        setModalLoginOpen(true);
        setModalRegisterOpen(false)
    };

    const handleCloseModalLogin = () => {
        setModalLoginOpen(false);
    };

    const onAuthed = () => {
        setAuthed(true);
    }

    return (
        <>
            <div className="navigation">

                <div className="nav-left-group">
                    <NavLink to="/" text="Главная" />
                    <NavLink to="/objects" text="Предметы" active />
                    <NavLink to="/personal-tasks" text="Личные задачи" />

                </div>
                <div className="nav-right-group">
                    {!isAuthed ? (
                        // Оставь пустое место для кода
                        <button className="navigation-login-button" onClick={handleOpenModalLogin}>Авторизация</button>
                    ) : (
                        <NavLink to="/profile" text="Профиль" profile />
                    )}
                    {isModalLoginOpen && (<Login onClose={handleCloseModalLogin} onRegister={handleOpenModalRegister} onAuthed={onAuthed} />)}
                    {isModalRegisterOpen && (<Register onClose={handleCloseModalRegister} onLogin={handleOpenModalLogin} />)}
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