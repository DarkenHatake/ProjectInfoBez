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
                        <input
                            type="text"
                            name="title"
                            value={editedItem.title}
                            onChange={handleChange}
                            placeholder="Название предмета"
                            required
                            className="EditItemModal-input-field"
                        />
                    </div>
                    <div className="EditItemModal-form-group">
                        <textarea
                            name="description"
                            value={editedItem.description}
                            onChange={handleChange}
                            placeholder="Описание предмета"
                            className="EditItemModal-textarea-field"
                        />
                    </div>
                    <div className="EditItemModal-modal-buttons">
                        <button type="button" className="EditItemModal-cancel-button" onClick={onClose}>Отмена</button>
                        <button type="submit" className="EditItemModal-save-button">Сохранить</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditItemModal;