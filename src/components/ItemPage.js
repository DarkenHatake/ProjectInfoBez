// ItemPage.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getTasksBySubjectId } from '../api';
import TaskList from './TaskList';
import ShareCodeModal from './ShareCodeModal';

const ItemPage = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
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
    }, [item]);

    const handleJoinClick = () => {
        setIsModalOpen(true);
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
            {isModalOpen && <ShareCodeModal code="dd79d8b1-4735-462b-84ad-4d83390e6fef" onClose={handleCloseModal} />}

            {loading && <p>Загрузка задач...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!loading && !error && (
                <div>
                    <h2>Задачи</h2>
                    <TaskList tasks={tasks} onEdit={() => {}} onDelete={() => {}} />
                </div>
            )}
        </div>
    );
};

export default ItemPage;