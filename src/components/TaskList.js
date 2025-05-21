// TaskList.js

import React from 'react';
import './ComponentsStyles/TaskList.css';
import Task from './Task'; // Импортируем новый компонент

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onEdit={onEdit}
                    onDelete={() => onDelete(task.id)}
                />
            ))}
        </ul>
    );
};

export default TaskList;