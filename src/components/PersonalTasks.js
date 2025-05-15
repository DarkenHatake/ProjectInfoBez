import React, { useState } from 'react';
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList';
import EditTask from './EditTask';
import './ComponentsStyles/PersonalTasks.css';

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
         setTasks(prev => [...prev, {
        ...newTask,
        id: Date.now(),
        completed: false,
        submitted: false
    }]);
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

    const handleCompleteTask = (task) => {
    setTasks(tasks.map(t => 
        t.id === task.id ? {...t, completed: !t.completed} : t
    ));
};

    const handleSubmitTask = (task) => {
    setTasks(tasks.map(t => 
        t.id === task.id ? {...t, submitted: !t.submitted} : t
    ));
};

    return (
        <div className="personal-tasks-container">
            <h1 className="personal-tasks-title">Личные задачи</h1>
            <button className="create-personal-tasks" onClick={handleOpenCreateModal}>Создать задачу</button>
            <TaskList tasks={tasks} onEdit={handleOpenEditModal} onDelete={handleDeleteTask} onComplete={handleCompleteTask}
    onSubmit={handleSubmitTask} />

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