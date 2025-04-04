import React from 'react';
import './ComponentsStyles/ItemList.css'; // Импортируйте CSS-файл, если он есть

const ItemList = ({ items, onDelete }) => {
    return (
        <div className="itemlist-item-list-container">
            <ul className="itemlist-item-list">
                {items.map((item, index) => (
                    <li key={index} className="itemlist-item">
                        <div className="itemlist-item-headr">
                            <h3 className="itemlist-item-name">{item.name}</h3>
                            {item.description && (
                                <p className="itemlist-item-description"><strong>Описание:</strong> {item.description}</p>
                            )}
                            {item.deadline && (
                                <p className="itemlist-item-deadline"><strong>Дедлайн:</strong> {item.deadline}</p>
                            )}
                        </div>
                        <button className="itemlist-delete-button" onClick={() => onDelete(index)}>Удалить</button>
                        <button className="itemlist-go-button">Перейти</button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;