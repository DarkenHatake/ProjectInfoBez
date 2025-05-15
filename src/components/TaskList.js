import React from 'react';
import './ComponentsStyles/TaskList.css';
import Task from './Task'; // Импортируем новый компонент

const TaskList = ({ tasks, onEdit, onDelete, onComplete, onSubmit }) => {
    return (
        <div className="task-list">
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onComplete={onComplete}
                        onSubmit={onSubmit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;