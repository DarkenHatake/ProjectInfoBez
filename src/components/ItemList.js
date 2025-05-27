import React from 'react';
import Item from './Item'; // Импортируем компонент Item
import './ComponentsStyles/ItemList.css';

const ItemList = ({ items = [], onDelete }) => {
    return (
        <div className="itemlist-item-list-container">
            <ul className="itemlist-item-list">
                {items.map((item) => (
                    <Item key={item.id} item={item} onDelete={() => onDelete(item.id)} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;