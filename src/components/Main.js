import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './ComponentsStyles/Main.css';

const Main = ({ items, personalTasks = [] }) => {
    // Функция для сортировки предметов по дедлайну (сначала ближайшие)
    const [closestItems, setClosestItems] = useState([]);
    const [closestTasks, setClosestTasks] = useState([]);

    useEffect(() => {
       setClosestItems(getClosestDeadlineItems());
       setClosestTasks(getClosestTasks());
       console.log(personalTasks);
    }, []);

    const getClosestDeadlineItems = () => {
        if (!items || items.length === 0) return [];
        console.log(personalTasks)
        // Фильтруем предметы с дедлайном и сортируем их
        const itemsWithDeadline = items;
        const sortedItems = [...itemsWithDeadline].sort((a, b) => {
            return new Date(a.deadline) - new Date(b.deadline);
        });

        // Возвращаем 3 ближайших
        return sortedItems.slice(0, 3);
    };

    // Функция для получения 2 ближайших персональных задач
    const getClosestTasks = () => {
        return [...personalTasks]
            .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
            .slice(0, 2);
    };


        return (
        <div className="main-main-container">
            <div className="main-content-wrapper">
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
                </div>

                <div className="main-personal-tasks-frame">
                    <h2 className="main-frame-title">Персональные задачи:</h2>
                    {closestTasks.length > 0 ? (
                        <ul className="main-tasks-list">
                            {closestTasks.map((task, index) => (
                                <li key={index} className="main-task-item">
                                    <h3 className="main-task-title">{task.title}</h3>
                                    {task.deadline && (
                                        <p className="main-task-deadline">
                                            {new Date(task.deadline).toLocaleDateString('ru-RU', {
                                                day: '2-digit',
                                                month: '2-digit'
                                            })}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="main-no-tasks">Нет задач с дедлайном</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Main;