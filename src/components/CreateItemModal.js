// CreateItemModal.js

import React, { useState } from 'react';
import { createSubject } from '../api';

const CreateItemModal = ({ onClose, onAddItem }) => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemDeadline, setItemDeadline] = useState('');

    const handleAdd = () => {
        if (!itemName.trim() || !itemDeadline) return;

        // Отправляем запрос на сервер
        createSubject(itemName, itemDescription, itemDeadline)
            .then(() => {
                onAddItem(itemName, itemDescription, itemDeadline);
                setItemName('');
                setItemDescription('');
                setItemDeadline('');
                onClose();
            })
            .catch((err) => {
                console.error('Ошибка при создании предмета:', err);
            });
    };

    return (
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
            <div className="createitemmodal-input-group">
                <input
                    type="date"
                    value={itemDeadline}
                    onChange={(e) => setItemDeadline(e.target.value)}
                />
            </div>
            <div className="createitemmodal-buttons">
                <button className="createitemmodal-back-button" onClick={onClose}>
                    Назад
                </button>
                <button className="createitemmodal-add-button" onClick={handleAdd}>
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default CreateItemModal;