// ItemPage.js

import React, { useState, useEffect } from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {createPersonalTask, getSubjectByID, getSubjects, getTasksBySubjectId} from '../api';
import TaskList from './TaskList';
import ShareCodeModal from './ShareCodeModal';
import CreateTaskForm from './CreateTaskForm';

const ItemPage = () => {
    //const location = useLocation();
    const [item, setItem]  = useState({});
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams(); // /users/:id
    const [isCreateOpen, setCreateOpen] = useState(false);
    useEffect(() => {
        try {
            getSubjects().then((res) => {
                console.log(res.data)
                console.log(id)
                for (const resKey of res.data) {
                    console.log("resKey: ", resKey.id)
                    if (resKey.id == id) {

                        setItem(resKey)
                        console.log(resKey)
                    }

                }
            })
        } catch (e) {
            console.log(e)
        }

        if (item?.id) {
            getTasksBySubjectId(item.id)
                .then(res => {
                    setTasks(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Ошибка получения задач:', err);
                    setError('Не удалось загрузить задачи');
                    setLoading(false);
                });
        }
    }, []);
    const handleCreateTask = (newTask) => {
        createPersonalTask(newTask.title, newTask.description)
            .then(res => {
                setTasks([...tasks, res.data]);
                handleCloseCreateModal();
            })
            .catch(err => {
                console.error('Ошибка создания задачи:', err);
            });
    };
    const handleJoinClick = () => {
        setIsModalOpen(true);
    };
    const handleOpenCreateModal = () => {
        setCreateOpen(true);
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
            <h1>{item.title}</h1>
            <button onClick={handleJoinClick}>Поделиться</button>
            {isModalOpen && <ShareCodeModal code={item.invitation_code} onClose={handleCloseModal}/>}

            {loading && <p>Загрузка задач...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}

            {!loading && !error && (
                <div>
                    <h2>Задачи</h2>

                    <button className="item-create-personal-tasks" onClick={handleOpenCreateModal}>Создать задачу</button>
                    {isCreateOpen && (
                        <CreateTaskForm onClose={handleCloseCreateModal} onCreate={handleCreateTask} />
                    )}
                    <TaskList tasks={tasks} onEdit={() => {
                    }} onDelete={() => {
                    }}/>
                </div>
            )}
        </div>
    );
};

export default ItemPage;