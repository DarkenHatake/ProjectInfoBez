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
    const [tasks, setTasks] = useState([
        { id: 1, text: "Первая задача",
            description: "Описание задачи",
            deadlineStart: "2023-12-01",
            deadlineEnd: "2023-12-15",
            completed: false,
            submitted: false},
        { id: 2, text: "Вторая задача",
            description: "Описание задачи",
            deadlineStart: "2023-12-01",
            deadlineEnd: "2023-12-15",
            completed: true,
            submitted: false},
            
    ]);

    // Функции для обработки задач (можно передать из родительского компонента)
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
                    onComplete={handleCompleteTask}
                    onSubmit={handleSubmitTask}
                />
            </div>
        </div>
    );
};

export default ItemPage;