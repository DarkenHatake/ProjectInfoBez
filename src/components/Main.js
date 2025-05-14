import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsStyles/Main.css';

const Main = ({ items }) => {
    // Функция для сортировки предметов по дедлайну (сначала ближайшие)
    const getClosestDeadlineItems = () => {
        if (!items || items.length === 0) return [];

        // Фильтруем предметы с дедлайном и сортируем их
        const itemsWithDeadline = items.filter(item => item.deadline);
        const sortedItems = [...itemsWithDeadline].sort((a, b) => {
            return new Date(a.deadline) - new Date(b.deadline);
        });

        // Возвращаем 3 ближайших
        return sortedItems.slice(0, 3);
    };

    const closestItems = getClosestDeadlineItems();

    return (
        <div className="main-main-container">
            <div className="main-content-wrapper">
                <h1 className="main-dashboard-title">Дашборд</h1>

                <div className="main-top-frames">
                    <div className="main-frame">
                        <h2 className="main-frame-title">Предметы:</h2>
                        {closestItems.length > 0 ? (
                            <ul className="main-items-list">
                                {closestItems.map((item, index) => (
                                    <li key={index} className="main-item">
                                        <div className="main-item-content">
                                            <h3 className="main-item-title">{item.title}</h3>
                                            {item.deadline && (
                                                <p className="main-item-deadline">
                                                    <strong>Дедлайн:</strong> {item.deadline}
                                                </p>
                                            )}
                                        </div>
                                        <Link
                                            to={{ pathname: '/item-page', state: { item } }}
                                            className="main-item-go-button"
                                        >
                                            Перейти
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="main-no-items">Нет предметов с дедлайном</p>
                        )}
                    </div>

                    <div className="main-frame">
                        <h2 className="main-frame-title">Выполнено за 2 недели:</h2>
                    </div>
                </div>

                <div className="main-personal-tasks-frame">
                    <h2 className="main-frame-title">Персональные задачи:</h2>
                </div>
            </div>
        </div>
    );
};

export default Main;