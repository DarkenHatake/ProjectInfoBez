// Task.js

import React from 'react';
import './ComponentsStyles/Task.css';

const Task = ({ task, onEdit, onDelete }) => {
    return (
        <li className="task-item">
            <div className="task-header">
                <p className="task-title">{task.title}</p>
                {task.description && (
                    <p className="task-description">Описание: {task.description}</p>
                )}
                {task.deadline && (
                    <p className="task-deadline">Дата сдачи: {task.deadline}</p>
                )}
                {task.deadlineEnd && (
                    <p className="task-deadline-2">Дата сдачи: {task.deadlineEnd}</p>
                )}
            </div>
            <div className="task-buttons">
                <button className="task-delete-button" onClick={() => onDelete(task)}>
                    Удалить
                </button>
                <button className="task-edit-button" onClick={() => onEdit(task)}>
                    Изменить
                </button>
            </div>
        </li>
    );
};

export default Task;