import React, { useState, useEffect } from 'react';
import './ComponentsStyles/EditTask.css';

const EditTask = ({ task, onClose, onEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStartDate(task.deadlineStart);
            setEndDate(task.deadlineEnd);
        }
    }, [task]);

    const handleCancel = () => {
        if (onClose) onClose();
    };

    const handleSaveChanges = () => {
        onEdit({
            title,
            description,
            deadlineStart: startDate,
            deadlineEnd: endDate,
        });
    };

    return (
        <div className="edit-task-wrapper">
            <div className="edit-task-container">
                <h2 className="form-title">Редактирование задачи</h2>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название задачи"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Описание задачи"
                />
                <div className="date-fields">
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <button className="cancel-btn" onClick={handleCancel}>Отмена</button>
                    <button className="save-btn" onClick={handleSaveChanges}>Сохранить изменения</button>
                </div>
            </div>
        </div>
    );
};

export default EditTask;
