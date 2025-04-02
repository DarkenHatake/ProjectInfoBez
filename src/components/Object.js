import React, { useState } from 'react';
import CreateItemModal from './CreateItemModal';
import ItemList from './ItemList';
import JoinSubject from './JoinSubject';
import './ComponentsStyles/Object.css';

const Object = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [items, setItems] = useState([]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    // Новая функция для удаления предмета
    const handleDeleteItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    const handleOpenJoin = () => {
        setIsJoinModalOpen(true)
    }
    const handleCloseJoin = () => {
        setIsJoinModalOpen(false);
    };
    return (
        <div>
            <h1 className="object-title">Предметы</h1>
            <button className="create-item" onClick={handleOpenModal}>Создать предмет</button>
            <button className="join" onClick={handleOpenJoin}>Присоединиться</button>

            {/* Теперь передаем onDelete */}
            <ItemList items={items} onDelete={handleDeleteItem} />

            {isModalOpen && (
                <CreateItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />
            )}

            {isJoinModalOpen && (
                <JoinSubject onClose={handleCloseJoin}/>
            )}
        </div>
    );
};

export default Object;