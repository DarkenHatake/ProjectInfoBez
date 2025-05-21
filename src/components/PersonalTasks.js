// PersonalTasks.js

import React, { useState, useEffect } from 'react';
import CreateTaskForm from './CreateTaskForm';
import TaskList from './TaskList';
import EditTask from './EditTask';
import { getAllPersonalTasks, updatePersonalTask, deletePersonalTask } from '../api';
import './ComponentsStyles/PersonalTasks.css';

const PersonalTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [loading, setLoading] = useState(true);

    // Загружаем личные задачи при монтировании компонента
    useEffect(() => {
        getAllPersonalTasks()
            .then(res => {
                setTasks(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Ошибка загрузки личных задач:', err);
                setLoading(false);
            });
    }, []);

    const handleOpenCreateModal = () => {
        setCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setCreateModalOpen(false);
    };

    const handleCreateTask = () => {
        getAllPersonalTasks()
            .then(res => {
                setTasks(res.data);
            })
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
        updatePersonalTask(currentTask.id, updatedTask)
            .then(() => {
                setTasks(tasks.map(t => t.id === currentTask.id ? { ...t, ...updatedTask } : t));
                handleCloseEditModal();
            })
            .catch(err => {
                console.error('Ошибка обновления задачи:', err);
            });
    };

    const handleDeleteTask = (taskToDelete) => {
        deletePersonalTask(taskToDelete)
            .then(() => {
                getAllPersonalTasks().then(res => {setTasks(res.data);})
            })
            .catch(err => {
                console.error('Ошибка удаления задачи:', err);
            });
    };

    if (loading) return <p>Загрузка личных задач...</p>;

    return (
        <div className="personal-tasks-container">
            <h1 className="personal-tasks-title">Личные задачи</h1>
            <button className="create-personal-tasks" onClick={handleOpenCreateModal}>Создать задачу</button>

            <TaskList tasks={tasks} onEdit={handleOpenEditModal} onDelete={handleDeleteTask} />

            {/* Модальное окно: создание задачи */}
            {isCreateModalOpen && (
                <CreateTaskForm onClose={handleCloseCreateModal} onCreate={handleCreateTask} isSubjectTask={false} />
            )}

            {/* Модальное окно: редактирование задачи */}
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