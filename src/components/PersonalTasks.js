import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const PersonalTasks = () => {
    const [tasks, setTasks] = useState([]); // Состояние для хранения списка задач
    const [taskInput, setTaskInput] = useState(''); // Состояние для хранения текста новой задачи
    const [deadlineInput, setDeadlineInput] = useState(''); // Состояние для хранения дедлайна новой задачи

    // Обработчик изменения текста в поле ввода задачи
    const handleInputChange = (e) => {
        setTaskInput(e.target.value); // Обновляем состояние taskInput на основе ввода пользователя
    };

    // Обработчик изменения даты в поле ввода дедлайна
    const handleDeadlineChange = (e) => {
        setDeadlineInput(e.target.value); // Обновляем состояние deadlineInput на основе ввода пользователя
    };

    // Функция добавления новой задачи
    const addTask = () => {
        if (taskInput.trim()) { // Проверяем, что введенный текст не пустой
            setTasks([
                ...tasks,
                {
                    id: Date.now(),
                    text: taskInput,
                    deadline: deadlineInput || 'Без дедлайна', // Если дедлайн не указан, устанавливаем значение по умолчанию
                    completed: false,
                },
            ]); // Добавляем новую задачу в список
            setTaskInput(''); // Очищаем поле ввода задачи после добавления
            setDeadlineInput(''); // Очищаем поле ввода дедлайна после добавления
        }
    };

    // Функция переключения состояния завершения задачи
    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task // Меняем состояние completed для выбранной задачи
        ));
    };

    // Функция удаления задачи из списка
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id)); // Фильтруем задачи, оставляя только те, которые не были удалены
    };

    return (
        <>
            <h1>Это страница личных заданий</h1>
            {/* Используем компонент ввода задачи */}
            <TaskInput
                taskInput={taskInput}
                deadlineInput={deadlineInput}
                handleInputChange={handleInputChange}
                handleDeadlineChange={handleDeadlineChange}
                addTask={addTask}
            />
            <TaskList
                tasks={tasks}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
            />
        </>
    );
};

export default PersonalTasks;