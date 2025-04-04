import React from 'react';
import './ComponentsStyles/ItemList.css';

const ItemList = ({ items, onDelete }) => {
    return (
        <div className="items-container">
            {items.length === 0 ? (
                <p className="empty-message">Список пуст. Добавьте новый предмет.</p>
            ) : (
                items.map((item, index) => (
                    <div key={index} className="item-card">
                        <div className="item-header">
                            <h3 className="item-name">{item.name}</h3>
                            <div className="item-badges">
                                <span className="role-badge creator">Создатель</span>
                                <button className="delete-button" onClick={() => onDelete(index)}>
                                    Удалить
                                </button>
                                <button className="go-button">Перейти</button>
                            </div>
                        </div>
                        
                        <div className="item-details">
                            <div className="item-tasks">
                                <p>Осталось задач: {item.tasksCount || 0}</p>
                            </div>
                            <div className="item-deadline">
                                <p>Ближайший дедлайн: {item.deadline || 'Не указан'}</p>
                            </div>
                            <div className="item-lesson">
                                <p>Ближайшая пара: {item.nextLesson || 'Не указана'}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ItemList;
