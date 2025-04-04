import React from 'react';
import './ComponentsStyles/Main.css';

const Main = () => {
    return (
        <div className="main-main-container">
            <div className="main-content-wrapper">
                <h1 className="main-dashboard-title">Дашборд</h1>

                <div className="main-top-frames">
                    <div className="main-frame">
                        <h2 className="main-frame-title">Предметы:</h2>
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
