import React from 'react';
import './ComponentsStyles/Task.css'; // Не забудьте создать этот файл для стилей, если нужно

const Task = ({ task, onEdit, onDelete }) => {
    return (
        <li className="task-item">
            <div className="task-header">
                <p className="task-title">{task.title}</p>
                <p className="task-description">Описание: {task.description}</p>
                <p className="task-deadline-1">Дата выполнения: {task.deadlineStart}</p>
                <p className="task-deadline-2">Дата сдачи: {task.deadlineEnd}</p>
            </div>
            <div className="task-buttons">
                <button className="task-delete-button" onClick={() => onDelete(task)}>Удалить</button>
                <button className="task-edit-button" onClick={() => onEdit(task)}>Изменить</button>
            </div>
        </li>
    );
};

export default Task;