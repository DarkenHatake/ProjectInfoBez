import React, { useState } from 'react';
import './ComponentsStyles/JoinSubject.css';

const JoinSubject = ({ onClose, onJoin }) => {
    const [link, setLink] = useState('');

    const handleJoin = async () => {
        if (link.trim()) {
            try {
                // Здесь должна быть реальная логика API для присоединения
                // const response = await joinSubject(link);
                
                // Временный объект для демонстрации (заменить на данные от API)
                const joinedSubject = {
                    id: Date.now(), // временный ID (должен приходить с бэкенда)
                    title: `Предмет по коду ${link}`,
                    description: 'Описание появится после присоединения',
                    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // +30 дней
                        .toISOString().split('T')[0],
                    isCreator: false // Важно - участник, не создатель
                };
                
                onJoin(joinedSubject); // Передаем данные в Object.js
                onClose();
            } catch (error) {
                console.error('Ошибка присоединения:', error);
                // Можно добавить уведомление об ошибке
            }
        }
    };

    return (
        <div className="joinsubject-join-subject-wrapper">
            <div className="joinsubject-join-subject-container">
                <h2 className="joinsubject-form-title">Присоединиться к предмету</h2>

                <div className="joinsubject-input-container">
                    <input
                        type="text"
                        placeholder="Введите код предмета"
                        className="joinsubject-input-field"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>

                <div className="joinsubject-buttons-container">
                    <button 
                        className="joinsubject-back-button" 
                        onClick={onClose}
                    >
                        Назад
                    </button>
                    <button 
                        className="joinsubject-join-button"
                        onClick={handleJoin}
                        disabled={!link.trim()}
                    >
                        Присоединиться
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinSubject;