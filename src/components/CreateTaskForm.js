import React, { useState } from 'react';
import './ComponentsStyles/CreateTaskForm.css';

const CreateTaskForm = ({ onClose, onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadlineStart, setDeadlineStart] = useState('');
    const [deadlineEnd, setDeadlineEnd] = useState('');

    const handleSubmit = () => {
        if (title.trim() && description.trim() && deadlineStart && deadlineEnd) {
            onCreate({
                title,
                description,
                deadlineStart,
                deadlineEnd,
            });
            // Очистка формы
            setTitle('');
            setDescription('');
            setDeadlineStart('');
            setDeadlineEnd('');
            onClose();
        }
    };

    return (
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
                <button className="createtaskform-cancel-btn" onClick={onClose}>Отмена</button>
                <button className="createtaskform-create-btn" onClick={handleSubmit}>Создать задачу</button>
            </div>
        </div>
    );
};

export default CreateTaskForm;
