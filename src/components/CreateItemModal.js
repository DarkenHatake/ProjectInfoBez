// CreateItemModal.js
import React, { useState } from 'react';

const CreateItemModal = ({ onClose, onAddItem }) => {
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemDeadline, setItemDeadline] = useState('');

    const handleAdd = () => {
        if (itemName.trim() !== '' && itemDeadline.trim() !== '') {
            // Создаем объект с данными нового предмета
            const newItem = {
                name: itemName,
                description: itemDescription,
                deadline: itemDeadline,
            };
            onAddItem(newItem); // Передаем объект в родительский компонент
            setItemName(''); // Очищаем поля ввода
            setItemDescription('');
            setItemDeadline('');
            onClose(); // Закрываем модальное окно
        }
    };

    return (
        <div style={modalStyles}>
            <h2>Создание нового предмета</h2>
            <div style={{ marginBottom: '10px' }}>
                <label>Название:</label>
                <input
                    type="text"
                    placeholder="Введите название"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Описание:</label>
                <textarea
                    placeholder="Введите описание"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                    rows="3"
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Дедлайн:</label>
                <input
                    type="date"
                    value={itemDeadline}
                    onChange={(e) => setItemDeadline(e.target.value)}
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={handleAdd} style={{ marginRight: '10px' }}>
                    Добавить
                </button>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

// Стили для модального окна
const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
};

export default CreateItemModal;