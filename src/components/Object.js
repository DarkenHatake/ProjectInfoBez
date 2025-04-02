import React, { useState } from 'react';
import CreateItemModal from './CreateItemModal';
import ItemList from './ItemList';
import './ComponentsStyles/Object.css';

const Object = () => {
    const [isModalOpen, setModalOpen] = useState(false);
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

    return (
        <div>
            <h1>Управление предметами</h1>
            <button onClick={handleOpenModal}>Создать предмет</button>

            {/* Теперь передаем onDelete */}
            <ItemList items={items} onDelete={handleDeleteItem} />

            {isModalOpen && (
                <CreateItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />
            )}
        </div>
    );
};

export default Object;