import React, { useState } from 'react';
import './ComponentsStyles/EditItemModal.css';

const EditItemModal = ({ item, onSave, onClose }) => {
    const [editedItem, setEditedItem] = useState({
        title: item.title,
        description: item.description || '',
        deadline: item.deadline || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedItem(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedItem);
    };

    return (
        <div className="EditItemModal-modal-overlay">
            <div className="EditItemModal-modal-content">
                <h2>Редактирование элемента</h2>
                <form onSubmit={handleSubmit}>
                    <div className="EditItemModal-form-group">
                        <label>Название:</label>
                        <input
                            type="text"
                            name="title"
                            value={editedItem.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="EditItemModal-form-group">
                        <label>Описание:</label>
                        <textarea
                            name="description"
                            value={editedItem.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="EditItemModal-modal-buttons">
                        <button type="submit" className="EditItemModal-save-button">Сохранить</button>
                        <button type="button" className="EditItemModal-cancel-button" onClick={onClose}>Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditItemModal;