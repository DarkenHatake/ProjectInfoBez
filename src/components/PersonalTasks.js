import React, { useState } from 'react';
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList';
import EditTask from './EditTask';

const PersonalTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    const handleOpenCreateModal = () => {
        setCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setCreateModalOpen(false);
    };

    const handleCreateTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
        handleCloseCreateModal();
    };

    const handleOpenEditModal = (task) => {
        setCurrentTask(task);
        setEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setEditModalOpen(false);
        setCurrentTask(null);
    };

    const handleEditTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.title === updatedTask.title ? updatedTask : task
            )
        );
        handleCloseEditModal();
    };

    const handleDeleteTask = (taskToDelete) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
    };

    return (
        <div className="personal-tasks-container">
            <h1>Личные задачи</h1>
            <button onClick={handleOpenCreateModal}>Создать задачу</button>

            <TaskList tasks={tasks} onEdit={handleOpenEditModal} onDelete={handleDeleteTask} />

            {/* Модальное окно с формой создания задачи */}
            {isCreateModalOpen && (
                <CreateTaskForm onClose={handleCloseCreateModal} onCreate={handleCreateTask} />
            )}

            {/* Модальное окно с формой редактирования задачи */}
            {isEditModalOpen && (
                <EditTask
                    task={currentTask}
                    onClose={handleCloseEditModal}
                    onEdit={handleEditTask}
                />
            )}
        </div>
    );
};

export default PersonalTasks;