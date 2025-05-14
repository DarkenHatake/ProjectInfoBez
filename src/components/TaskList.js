import React from 'react';
import './ComponentsStyles/TaskList.css';
import Task from './Task'; // Импортируем новый компонент

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="task-list">
            <ul>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;