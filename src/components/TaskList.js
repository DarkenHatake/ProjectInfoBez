import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="task-list">
            <h2>Список задач</h2>
            {tasks.length === 0 ? (
                <p>Нет задач для отображения.</p>
            ) : (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            <p>Срок начала: {task.deadlineStart}</p>
                            <p>Срок окончания: {task.deadlineEnd}</p>
                            <button onClick={() => onEdit(task)}>Редактировать</button>
                            <button onClick={() => onDelete(task)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
