import React from 'react';
import './ComponentsStyles/Task.css';

const Task = ({ task, onEdit, onDelete, onComplete, onSubmit }) => {
    return (
        <li className="task-item">
            <div className="task-header">
                <div className="task-title-row">
                    <p className="task-title">{task.title}</p>
                    <div className="task-status-buttons">
                        <button 
                            className={`task-done-button ${task.completed ? 'active' : ''}`}
                            onClick={() => onComplete(task)}
                        >
                            {task.completed ? '✓ Сделано' : 'Сделано'}
                        </button>
                        <button 
                            className={`task-submit-button ${task.submitted ? 'active' : ''}`}
                            onClick={() => onSubmit(task)}
                        >
                            {task.submitted ? '✓ Сдано' : 'Сдано'}
                        </button>
                    </div>
                </div>
                
                {task.description && (
                    <p className="task-description">Описание: {task.description}</p>
                )}
                
                <div className="task-deadlines-row">
                    <div className="task-deadlines">
                        {task.deadlineStart && (
                            <p className="task-deadline">Выполнить до: {task.deadlineStart}</p>
                        )}
                        {task.deadlineEnd && (
                            <p className="task-deadline">Сдать до: {task.deadlineEnd}</p>
                        )}
                    </div>
                    
                    <div className="task-manage-buttons">
                        <button className="task-edit-button" onClick={() => onEdit(task)}>
                            Изменить
                        </button>
                        <button className="task-delete-button" onClick={() => onDelete(task)}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Task;