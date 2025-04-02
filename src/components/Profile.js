import React from 'react';
import './ComponentsStyles/Profile.css'; // Подключаем стили

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="content-container">
                {/* Заголовок "Профиль" */}
                <h1 className="profile-title">Профиль</h1>

                {/* Карточка с данными пользователя */}
                <div className="profile-card">
                    <div className="user-info">
                        <p className="username">Username: TheAmperov</p>
                        <p className="email">Email: alex.amperov@gmail.com</p>
                        <p className="password">Password: ********</p>
                    </div>

                    {/* Кнопка "Редактировать" */}
                    <button className="edit-button">Редактировать</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;