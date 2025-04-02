// Object.js
import React, { useState } from 'react';
import CreateItemModal from './CreateItemModal';
import ItemList from './ItemList';
const Object = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [items, setItems] = useState([]); // Список объектов
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]); // Добавляем новый объект в список
    };
    return (
        <div>
            <h1>Управление предметами</h1>
            <button onClick={handleOpenModal}>Создать предмет</button>

            {/* Отображение списка предметов */}
            <ItemList items={items} />

            {/* Модальное окно */}
            {isModalOpen && (
                <CreateItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />
            )}
        </div>
    );
};
export default Object;