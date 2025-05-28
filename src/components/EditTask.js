// EditTask.js

import React, {useEffect, useState} from 'react';
import {updateSubjectTask, updatePersonalTask} from '../api'; // Импортируем функцию для обновления задачи
import './ComponentsStyles/EditTask.css'
const EditTask = ({ task, onClose, onEdit, isSubjectTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setdeadline] = useState('');
    const handleSaveChanges = () => {
        if (isSubjectTask) {
            updateSubjectTask(task.subject_id, task.id, title, description, deadline)
                .then(() => {
                    onClose();
                    setTitle('');
                    setDescription('');
                    setdeadline('');
                })
        } else {
            updatePersonalTask(task.id, title,description, deadline).then(()=> {
                onClose();
                setTitle('');
                setDescription('');
                setdeadline('');
            })
        }
    };
    useEffect(() => {
        // Заполняем поля данными текущей задачи
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setdeadline(task.deadline);
        }
    }, [task]);


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
                        value={deadline}
                        onChange={(e) => setdeadline(e.target.value)}
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