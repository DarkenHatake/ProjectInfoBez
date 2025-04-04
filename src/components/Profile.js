import React from 'react';
import './ComponentsStyles/Profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-content">
                {/* Шапка с заголовком и кнопкой */}
                <div className="profile-header">
                    <h1 className="profile-title">Профиль</h1>
                    <button className="edit-button">Редактировать</button>
                </div>
                
                {/* Рамка с данными */}
                <div className="profile-card">
                    <div className="user-data">
                        <div className="data-row">
                            <span className="data-label">Username:</span>
                        </div>
                        <div className="data-row">
                            <span className="data-label">Email:</span>
                        </div>
                        <div className="data-row">
                            <span className="data-label">Password:</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;