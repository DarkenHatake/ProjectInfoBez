// EditTask.js

import React, {useEffect, useState} from 'react';
import { updateSubjectTask } from '../api'; // Импортируем функцию для обновления задачи
import './ComponentsStyles/EditTask.css'
const EditTask = ({ task, onClose, onEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        // Заполняем поля данными текущей задачи
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setStartDate(task.deadlineStart);
            setEndDate(task.deadlineEnd);
        }
    }, [task]);

    const handleSaveChanges = () => {
        const updatedTask = {
            title,
            description,
            deadlineStart: startDate,
            deadlineEnd: endDate,
        };

        // Отправляем обновление на сервер
        updateSubjectTask(task.subjectId, task.id, updatedTask)
            .then(() => {
                onEdit(updatedTask); // Обновляем состояние в родительском компоненте
                onClose(); // Закрываем модальное окно
            })
            .catch((err) => {
                console.error('Ошибка при обновлении задачи:', err);
            });
    };

    return (
        <div className="edittask-edit-task-wrapper">
            <div className="edittask-edit-task-container">
                <h2 className="edittask-form-title">Редактирование задачи</h2>
                <input
                    type="text"
                    className="edittask-input-field"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название задачи"
                />
                <textarea
                    className="edittask-textarea-field"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Описание задачи"
                />
                <div className="edittask-date-fields">
                    <input
                        type="date"
                        className="edittask-input-field"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input
                        type="date"
                        className="edittask-input-field"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
                <div className="edittask-buttons-container">
                    <button className="edittask-cancel-button" onClick={onClose}>
                        Отмена
                    </button>
                    <button className="edittask-save-button" onClick={handleSaveChanges}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTask;