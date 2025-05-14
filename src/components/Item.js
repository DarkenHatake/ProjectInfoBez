import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsStyles/Item.css';

const Item = ({ item, index, onDelete }) => {
    return (
        <li className="item-item">
            <div className="item-headr">
                <h3 className="item-name">{item.title}</h3>
                {item.description && (
                    <p className="item-description"><strong>Описание:</strong> {item.description}</p>
                )}
                {item.deadline && (
                    <p className="item-deadline"><strong>Дедлайн:</strong> {item.deadline}</p>
                )}
            </div>
            <button className="item-delete-button" onClick={() => onDelete(index)}>Удалить</button>
            <Link to={{ pathname: '/item-page', state: { item } }} className="item-go-button">Перейти</Link>
        </li>
    );
};

export default Item;
