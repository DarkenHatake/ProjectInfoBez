import React from 'react';
import TaskItem from './TaskItem'; // Импортируем компонент TaskItem

// Компонент для отображения списка задач
const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
    return (
        <ul>
            {/* Проходим по массиву задач и создаем компонент TaskItem для каждой задачи */}
            {tasks.map(task => (
                <TaskItem
                    key={task.id} // Уникальный ключ для каждого элемента списка
                    task={task} // Передаем задачу в компонент TaskItem
                    toggleTaskCompletion={toggleTaskCompletion} // Передаем функцию для переключения состояния задачи
                    deleteTask={deleteTask} // Передаем функцию для удаления задачи
                />
            ))}
        </ul>
    );
};

export default TaskList; // Экспортируем компонент для использования в других файлах