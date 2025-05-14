import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import TaskList from './TaskList'; // Импортируем TaskList
import ShareCodeModal from './ShareCodeModal';
import './ComponentsStyles/ItemPage.css';

const ItemPage = () => {
    const location = useLocation();
    const { item } = location.state || {};
    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
    // Пример списка задач (можно заменить на реальные данные из пропсов, удали когда будешь менять)
    const tasks = [
        { id: 1, text: "Первая задача", completed: false },
        { id: 2, text: "Вторая задача", completed: true },
    ];

    // Функции для обработки задач (можно передать из родительского компонента)
    const handleEditTask = (taskId, newText) => {
        console.log("Редактируем задачу:", taskId, newText);
    };

    const handleDeleteTask = (taskId) => {
        console.log("Удаляем задачу:", taskId);
    };
    const handleOpenCreateModal = () => {
        setCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setCreateModalOpen(false);
    };

    if (!item) {
        return <div className="item-page-error">Элемент не найден</div>;

    }

    return (
        <div className="item-page-container">
            <div className="item-page-header">
                <h1 className="item-page-title">{item.title}</h1>
                <button className="item-page-share-button" onClick={handleOpenCreateModal}>Поделиться</button>
                {isCreateModalOpen && (
                    <ShareCodeModal onClose={handleCloseCreateModal} />
                )}
            </div>
            {/* Добавляем TaskList */}
            <div className="item-page-tasks">
                <h2>Задачи</h2>
                <TaskList
                    tasks={tasks}
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                />
            </div>
        </div>
    );
};

export default ItemPage;