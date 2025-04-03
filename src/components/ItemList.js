import React from 'react';
import './ComponentsStyles/ItemList.css'; // Импортируйте CSS-файл, если он есть

const ItemList = ({ items, onDelete }) => {
    return (
        <div className="item-list-container">
                <ul className="item-list">
                    {items.map((item, index) => (
                        <li key={index} className="item">
                            <div className="item-headr">
                                <h3 className="item-name">{item.name}</h3>
                                {item.description && (
                                    <p className="item-description"><strong>Описание:</strong> {item.description}</p>
                                )}
                                {item.deadline && (
                                    <p className="item-deadline"><strong>Дедлайн:</strong> {item.deadline}</p>
                                )}
                            </div>
                            <button className="delete-button" onClick={() => onDelete(index)}>Удалить</button>
                            <button className="go-button">Перейти</button>

                        </li>
                    ))}
                </ul>
        </div>
    );
};

export default ItemList;
