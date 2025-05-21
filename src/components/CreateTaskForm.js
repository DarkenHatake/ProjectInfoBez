// CreateTaskForm.js

import React, { useState } from 'react';
import {createPersonalTask, createSubjectTask} from '../api';
import './ComponentsStyles/CreateTaskForm.css';

const CreateTaskForm = ({ subjectId, onClose, onCreate,isSubjectTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    //const [deadlineStart, setDeadlineStart] = useState('');
    const [deadlineEnd, setDeadlineEnd] = useState('');

    const handleSubmit = () => {
        if (!title.trim()) return;

        // Отправляем задачу на сервер
        if (isSubjectTask) {
            createSubjectTask(subjectId, title, description, deadlineEnd)
                .then(() => {
                    // Очищаем поля
                    setTitle('');
                    setDescription('');
                    //setDeadlineStart('');
                    setDeadlineEnd('');
                    onCreate();
                    onClose();
                })
        } else {
            createPersonalTask(title,description).then(()=> {
                setTitle('');
                setDescription('');
                onCreate();
                onClose();
            })
        }
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
                {/*<input*/}
                {/*    type="date"*/}
                {/*    value={deadlineStart}*/}
                {/*    onChange={(e) => setDeadlineStart(e.target.value)}*/}
                {/*/>*/}
                {isSubjectTask && <input
                    type="date"
                    value={deadlineEnd}
                    onChange={(e) => setDeadlineEnd(e.target.value)}
                />}
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