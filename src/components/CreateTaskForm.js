// CreateTaskForm.js

import React, { useState } from 'react';
import { createSubjectTask } from '../api';
import './ComponentsStyles/CreateTaskForm.css';

const CreateTaskForm = ({ subjectId, onClose, onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadlineStart, setDeadlineStart] = useState('');
    const [deadlineEnd, setDeadlineEnd] = useState('');

    const handleSubmit = () => {
        if (!title.trim() || !deadlineStart || !deadlineEnd) return;

        // Отправляем задачу на сервер
        createSubjectTask(subjectId, title, description, deadlineStart, deadlineEnd)
            .then(() => {
                onCreate({
                    title,
                    description,
                    deadlineStart,
                    deadlineEnd,
                });

                // Очищаем поля
                setTitle('');
                setDescription('');
                setDeadlineStart('');
                setDeadlineEnd('');
                onClose();
            })
            .catch((err) => {
                console.error('Ошибка при создании задачи:', err);
            });
    };

    return (
        <div className="createtaskform-modal-overlay">
        <div className="createtaskform-create-task-container">
            <h2>Создать задачу</h2>
            <input
                type="text"
                placeholder="Название"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="createtaskform-date-fields">
                <input
                    type="date"
                    value={deadlineStart}
                    onChange={(e) => setDeadlineStart(e.target.value)}
                />
                <input
                    type="date"
                    value={deadlineEnd}
                    onChange={(e) => setDeadlineEnd(e.target.value)}
                />
            </div>
            <div className="createtaskform-buttons">
                <button
                    className="createtaskform-cancel-btn"
                    onClick={onClose}
                >
                    Отмена
                </button>
                <button
                    className="createtaskform-create-btn"
                    onClick={handleSubmit}
                >
                    Создать задачу
                </button>
            </div>
        </div>
        </div>
    );
};

export default CreateTaskForm;