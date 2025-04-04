import React from 'react';
import './ComponentsStyles/JoinSubject.css';

const JoinSubject = ({ onClose }) => {
    return (
        <div className="joinsubject-join-subject-wrapper">
            <div className="joinsubject-join-subject-container">
                <h2 className="joinsubject-form-title">Присоединиться к предмету</h2>

                <div className="joinsubject-input-container">
                    <input
                        type="text"
                        placeholder="Ссылка"
                        className="joinsubject-input-field"
                    />
                </div>

                <div className="joinsubject-buttons-container">
                    <button className="joinsubject-back-button" onClick={onClose}>Назад</button>
                    <button className="joinsubject-join-button">Присоединиться</button>
                </div>
            </div>
        </div>
    );
};

export default JoinSubject;
