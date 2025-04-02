import React, { useState } from 'react';
import './ComponentsStyles/JoinSubject.css';

const JoinSubject = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="join-subject-wrapper">
            <div className="join-subject-container">
                <h2 className="form-title">Присоединиться к предмету</h2>

                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Ссылка"
                        className="input-field"
                    />
                </div>

                <div className="buttons-container">
                    <button className="back-button" onClick={() => setIsVisible(false)}>Назад</button>
                    <button className="join-button">Присоединиться</button>
                </div>
            </div>
        </div>
    );
};

export default JoinSubject;
