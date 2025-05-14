// ItemList.js

import React, { useState, useEffect } from 'react';
import Item from './Item'; // Импортируем компонент Item
import { getSubjects } from '../api'; // Импортируем функцию для получения предметов

const ItemList = ({ onDelete }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Загружаем список предметов при монтировании компонента
        getSubjects()
            .then((response) => {
                setItems(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Ошибка при загрузке предметов:', err);
                setError('Не удалось загрузить список предметов');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="itemlist-item-list-container">
            <ul className="itemlist-item-list">
                {items.map((item, index) => (
                    <Item key={item.id} item={item} index={index} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;