// ItemPage.js

import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {
    deleteSubject,
    deleteSubjectTask,
    getSubjectByID,
    getTasksBySubjectId,
    updatePersonalTask,
    updateSubjectTask
} from '../api';
import TaskList from './TaskList';
import ShareCodeModal from './ShareCodeModal';
import CreateTaskForm from './CreateTaskForm';
import './ComponentsStyles/ItemPage.css'
import EditTask from './EditTask';
const ItemPage = () => {
    //const location = useLocation();
    const [item, setItem]  = useState({});
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState(null);
    const [error, setError] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams(); // /users/:id
    const [isCreateOpen, setCreateOpen] = useState(false);
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    useEffect(() => {
        try {
            getSubjectByID(id).then( res => {
                setItem(res.data);
                if (res.data.id) {
                    getTasksBySubjectId(res.data.id).then( res => {
                        setTasks(res.data);
                    })
                }
            })
        } catch (e) {
            console.log(e)
        }
    }, []);
    const handleCreateTask = () => {
        getTasksBySubjectId(id).then( res => {
            setTasks(res.data);
        })
    };
    const handleCloseEditModal = () => {
        setEditModalOpen(false);
        setCurrentTask(null);
    };
    const handleDeleteTask = (taskID) => {

        deleteSubjectTask(id, taskID).then( () => {
            getTasksBySubjectId(id).then( res => {
                setTasks(res.data);
            })
        })

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
    const handleJoinClick = () => {
        setIsModalOpen(true);
    };
    const handleOpenCreateModal = () => {
        setCreateOpen(true);
    };
    const handleOpenEditModal = (task) => {
        setCurrentTask(task);
        setEditModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setCreateOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    if (!item) {
        return <div>Предмет не найден</div>;
    }

    return (
        <div className="item-page-container">
            <h1 className ="item-page-name-object">{item.title}</h1>
            <button onClick={handleJoinClick} className={'item-page-share-button'}>Поделиться</button>
            {isModalOpen && <ShareCodeModal code={item.invitation_code} onClose={handleCloseModal}/>}


            {error && <p style={{color: 'red'}}>{error}</p>}

            { !error && (
                <div>
                    <h2 className={"item-page-zadacha"}>Задачи:</h2>

                    <button className="item-create-personal-tasks" onClick={handleOpenCreateModal}>Создать задачу</button>
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
            )}
        </div>
    );
};

export default ItemPage;