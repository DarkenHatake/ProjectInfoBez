// Profile.js

import React, { useEffect, useState } from 'react';
import { getProfile } from '../api';
import './ComponentsStyles/Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        getProfile()
            .then(res => {
                setUser(res.data.user);
                setLoading(false);
            })
            .catch(err => {
                console.error('Ошибка получения данных профиля:', err);
                setError('Не удалось загрузить данные профиля');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Загрузка профиля...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-header">
                    <h1 className="profile-title">Профиль</h1>
                    <button className="profile-edit-button">Редактировать</button>
                </div>

                <div className="profile-card">
                    <div className="profile-user-data">
                        <div className="profile-data-row">
                            <span className="profile-data-label">Username:</span>
                            <span className="profile-data-value">{user.username}</span>
                        </div>
                        <div className="profile-data-row">
                            <span className="profile-data-label">Email:</span>
                            <span className="profile-data-value">{user.email}</span>
                        </div>
                        <div className="profile-data-row">
                            <span className="profile-data-label">Password:</span>
                            <span className="profile-data-value">••••••••</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};