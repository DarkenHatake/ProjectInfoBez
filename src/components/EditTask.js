import React, { useState } from 'react';
import './ComponentsStyles/EditTask.css';

const EditTask = ({ onClose }) => {
    const [title, setTitle] = useState('Здесь существующее название');
    const [description, setDescription] = useState('Описание задачи которое уже есть');
    const [startDate, setStartDate] = useState('2025-03-29');
    const [endDate, setEndDate] = useState('2025-04-01');

    const handleCancel = () => {
        if (onClose) onClose(); // вызываем функцию закрытия окна, если передана
    };

    const handleEdit = () => {
        // логика сохранения изменений
        console.log('Задача обновлена');
    };

    return (
        <div className="edit-task-wrapper">
            <div className="edit-task-container">
                <h2 className="form-title">Редактирование задачи</h2>

                <div className="input-container">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-field"
                        placeholder="Название задачи"
                    />
                </div>

                <div className="input-container">
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="textarea-field"
                        placeholder="Описание"
                    />
                </div>

                <div className="input-container">
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="input-field"
                    />
                </div>

                <div className="input-container">
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="input-field"
                    />
                </div>

                <div className="buttons-container">
                    <button className="cancel-button" onClick={handleCancel}>Отменить</button>
                    <button className="edit-button" onClick={handleEdit}>Изменить</button>
                </div>
            </div>
        </div>
    );
};

export default EditTask;
