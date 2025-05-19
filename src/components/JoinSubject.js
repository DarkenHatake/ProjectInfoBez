// JoinSubject.js

import React, { useState } from 'react';
import { joinSubjectByCode } from '../api'; // Импортируем функцию для присоединения к предмету

const JoinSubject = ({ onClose }) => {
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleJoin = () => {
        setLoading(true);
        joinSubjectByCode(code)
            .then(() => {
                console.log('Успешно присоединились к предмету');
                onClose(); // Закрываем модальное окно
            })
            .catch((err) => {
                console.error('Ошибка при присоединении к предмету:', err);
                setError('Не удалось присоединиться к предмету');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="joinsubject-join-subject-wrapper">
            <div className="joinsubject-join-subject-container">
                <h2 className="joinsubject-form-title">Присоединиться к предмету</h2>
                <div className="joinsubject-input-container">
                    <input
                        type="text"
                        placeholder="Ссылка"
                        className="joinsubject-input-field"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <div className="joinsubject-buttons-container">
                    <button className="joinsubject-back-button" onClick={onClose}>Назад</button>
                    <button className="joinsubject-join-button" onClick={handleJoin} disabled={loading}>
                        {loading ? 'Присоединяюсь...' : 'Присоединиться'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinSubject;