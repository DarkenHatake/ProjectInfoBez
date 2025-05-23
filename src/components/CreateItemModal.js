// CreateItemModal.js
import './ComponentsStyles/CreateItemModal.css'
import React, { useState } from 'react';
import { createSubject } from '../api';

const CreateItemModal = ({ onClose, onAddItem }) => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');

    const handleAdd = () => {
        if (!itemName.trim()) return;
                onAddItem(itemName, itemDescription);
                setItemName('');
               setItemDescription('');
                onClose();

    };

    return (
        <div className="CreateItemModal-modal-overlay">
            <div className="createitemmodal-create-item-modal">
                <h2>Создание предмета</h2>
                <div className="createitemmodal-input-group">
                    <input
                        type="text"
                        placeholder="Название"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                </div>
                <div className="createitemmodal-input-group">
        <textarea
            placeholder="Описание"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            rows="3"
        />
                </div>
                {/*<div className="createitemmodal-input-group">
                    <input
                    type="date"
                    value={itemDeadline}
                    onChange={(e) => setItemDeadline(e.target.value)}
                />
                </div>*/}
                <div className="createitemmodal-buttons">
                    <button className="createitemmodal-back-button" onClick={onClose}>
                        Назад
                    </button>
                    <button className="createitemmodal-add-button" onClick={handleAdd}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateItemModal;