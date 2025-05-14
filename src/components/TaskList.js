// TaskList.js

import React from 'react';
import Task from './Task'; // Импортируем Task

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TaskList;