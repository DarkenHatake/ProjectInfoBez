import React from 'react';
import './ComponentsStyles/TaskInput.css'; // Подключаем CSS для стилизации рамки

const TaskInput = ({ taskInput, deadlineInput, handleInputChange, handleDeadlineChange, addTask }) => {
    return (
        <div className="task-input-container">
            {/* Поле ввода для новой задачи */}
            <input
                type="text"
                value={taskInput} // Значение поля ввода связано с состоянием taskInput
                onChange={handleInputChange} // Обработчик изменения текста в поле
                placeholder="Добавьте новую задачу" // Подсказка для пользователя
            />

            {/* Поле ввода для дедлайна */}
            <input
                type="date"
                value={deadlineInput} // Значение поля ввода связано с состоянием deadlineInput
                onChange={handleDeadlineChange} // Обработчик изменения дедлайна
                placeholder="Укажите дедлайн"
            />

            {/* Кнопка для добавления задачи */}
            <button onClick={addTask}>Добавить задачу</button>
        </div>
    );
};

export default TaskInput;