// TaskInput.js

import React from 'react';
import './ComponentsStyles/TaskInput.css';

const TaskInput = ({ taskInput, deadlineInput, handleInputChange, handleDeadlineChange, addTask }) => {
    return (
        <div className="task-input-container">
            <input
                type="text"
                value={taskInput}
                onChange={handleInputChange}
                placeholder="Добавьте новую задачу"
            />

            <input
                type="date"
                value={deadlineInput}
                onChange={handleDeadlineChange}
                placeholder="Укажите дедлайн"
            />

            <button onClick={addTask}>Добавить задачу</button>
        </div>
    );
};

export default TaskInput;