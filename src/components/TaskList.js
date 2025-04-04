import React from 'react';
import './ComponentsStyles/TaskList.css';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="task-list">
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <div className="task-headr">
                            <p className="task-title">{task.title}</p>
                            <p className="task-description">Описание:{task.description}</p>
                            <p className="task-deadline-1">Дата выполнения: {task.deadlineStart}</p>
                            <p className="task-deadline-2">Дата сдачи: {task.deadlineEnd}</p>
                        </div>
                        <div className="task-buttons">
                            <button className="task-delete-button" onClick={() => onDelete(task)}>Удалить</button>
                            <button className="task-edit-button" onClick={() => onEdit(task)}>Изменить</button>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
