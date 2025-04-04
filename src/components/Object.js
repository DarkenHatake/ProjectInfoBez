import React, { useState } from 'react';
import CreateItemModal from './CreateItemModal';
import JoinSubject from './JoinSubject';
import ItemList from './ItemList';
import './ComponentsStyles/Object.css';

const Object = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [items, setItems] = useState([]);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleOpenJoinModal = () => setShowJoinModal(true);
    const handleCloseJoinModal = () => setShowJoinModal(false);

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleDeleteItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <div className="object-page">
            <div className="object-header">
                <h1 className="object-title">Предметы</h1>
                <div className="object-actions">
                    <button className="join-button" onClick={handleOpenJoinModal}>Присоединиться</button>
                    <button className="create-button" onClick={handleOpenModal}>Создать предмет</button>
                </div>
            </div>

            <ItemList items={items} onDelete={handleDeleteItem} />

            {isModalOpen && (
                <CreateItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />
            )}

            {showJoinModal && <JoinSubject onClose={handleCloseJoinModal} />}
        </div>
    );
};

export default Object;
