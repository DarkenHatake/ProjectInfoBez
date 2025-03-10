import React from 'react';
import './ComponentsStyles/TaskItem.css'; // Подключаем CSS для стилизации рамки

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
    return (
        <li className="task-item">
            <div
                className="task-content"
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
                {/* Название задачи */}
                <span className="task-text" onClick={() => toggleTaskCompletion(task.id)}>
                    {task.text}
                </span>

                {/* Дедлайн задачи */}
                <span className="task-deadline">
                    (Дедлайн: {task.deadline || 'не указан'})
                </span>
            </div>

            {/* Кнопка для удаления задачи */}
            <button className="delete-button" onClick={() => deleteTask(task.id)}>
                Удалить
            </button>
        </li>
    );
};

export default TaskItem;