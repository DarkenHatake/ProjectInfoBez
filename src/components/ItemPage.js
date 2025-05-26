// ItemPage.js

import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import {deleteSubject, deleteSubjectTask, getSubjectByID, getTasksBySubjectId, updateSubjectTask} from '../api';
import TaskList from './TaskList';
import ShareCodeModal from './ShareCodeModal';
import CreateTaskForm from './CreateTaskForm';
import './ComponentsStyles/ItemPage.css'
const ItemPage = () => {
    //const location = useLocation();
    const [item, setItem]  = useState({});
    const [tasks, setTasks] = useState([]);

    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams(); // /users/:id
    const [isCreateOpen, setCreateOpen] = useState(false);
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

    const handleDeleteTask = (taskID) => {

        deleteSubjectTask(id, taskID).then( () => {
            getTasksBySubjectId(id).then( res => {
                setTasks(res.data);
            })
        })

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
            <button onClick={handleJoinClick} className={'item-page-share-button'}>Поделиться</button>
            {isModalOpen && <ShareCodeModal code={item.invitation_code} onClose={handleCloseModal}/>}


            {error && <p style={{color: 'red'}}>{error}</p>}

            { !error && (
                <div>
                    <h2>Задачи</h2>

                    <button className="item-create-personal-tasks" onClick={handleOpenCreateModal}>Создать задачу</button>
                    {isCreateOpen && (
                        <CreateTaskForm onClose={handleCloseCreateModal} subjectId={id} onCreate={handleCreateTask} />
                    )}
                    <TaskList tasks={tasks} onEdit={()=>{}} onDelete={handleDeleteTask}/>
                </div>
            )}
        </div>
    );
};

export default ItemPage;