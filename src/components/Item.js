import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComponentsStyles/Item.css';
import EditItemModal from './EditItemModal';

const Item = ({ item, index, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSave = (editedItem) => {
        onEdit(item.id, editedItem);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <>
            <li className="item-item">
                <div className="item-headr">
                    <h3 className="item-item-name">{item.title}</h3>
                    {item.description && (
                        <p className="item-description"><strong>Описание:</strong> {item.description}</p>
                    )}
                </div>
                <button className="item-delete-button" onClick={onDelete}>Удалить</button>
                <button className="item-change-button" onClick={handleEditClick}>Изменить</button>
                <Link to={{ pathname: `/item-page/${item.id}`, state: { item } }} className="item-go-button">Перейти</Link>
            </li>

            {isEditing && (
                <EditItemModal
                    item={item}
                    onSave={handleSave}
                    onClose={handleCancel}
                />
            )}
        </>
    );
};

export default Item;