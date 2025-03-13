import React from 'react';

const ItemList = ({ items, onDelete }) => {
    return (
        <div>
            <h2>Список предметов:</h2>
            {items.length === 0 ? (
                <p>Список пуст. Добавьте новый предмет.</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index} style={itemStyles}>
                            <h3>{item.name}</h3>
                            {item.description && (
                                <p>
                                    <strong>Описание:</strong> {item.description}
                                </p>
                            )}
                            {item.deadline && (
                                <p>
                                    <strong>Дедлайн:</strong> {item.deadline}
                                </p>
                            )}
                            <button
                                onClick={() => onDelete(index)}
                                style={deleteButtonStyles}
                            >
                                Удалить
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const itemStyles = {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const deleteButtonStyles = {
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default ItemList;