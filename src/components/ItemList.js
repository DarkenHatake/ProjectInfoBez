import React from 'react';
import './ComponentsStyles/ItemList.css'; // Импортируйте CSS-файл, если он есть
import Item from './Item'; // Импортируем новый компонент

const ItemList = ({ items, onDelete }) => {
    if (items === null || items === undefined) {
        items = [];
    }

    return (
        <div className="itemlist-item-list-container">
            <ul className="itemlist-item-list">
                {items.map((item, index) => (
                    <Item key={index} item={item} index={index} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
