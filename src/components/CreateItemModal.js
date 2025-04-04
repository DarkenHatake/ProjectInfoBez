// CreateItemModal.js
import React, { useState } from 'react';
import './ComponentsStyles/CreateItemModal.css'; // Подключаем стили

const CreateItemModal = ({ onClose, onAddItem }) => {

    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemDeadline, setItemDeadline] = useState('');

    const handleAdd = () => {
        if (itemName.trim() !== '' && itemDeadline.trim() !== '') {
            // Создаем объект с данными нового предмета
            const newItem = {name: itemName, description: itemDescription, deadline: itemDeadline,};
            onAddItem(newItem); // Передаем объект в родительский компонент
            setItemName(''); // Очищаем поля ввода
            setItemDescription('');
            setItemDeadline('');
            onClose(); // Закрываем модальное окно
        }
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
            <button className="createitemmodal-back-button" onClick={onClose}>Назад</button>
            <button className="createitemmodal-add-button" onClick={handleAdd}>Добавить</button>
          </div>
        </div>
      );
    };
    
    export default CreateItemModal;