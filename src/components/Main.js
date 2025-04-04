import React from 'react';
import './ComponentsStyles/Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <div className="content-wrapper">
                <h1 className="dashboard-title">Дашборд</h1>

                <div className="top-frames">
                    <div className="frame">
                        <h2 className="frame-title">Предметы:</h2>
                    </div>

                    <div className="frame">
                        <h2 className="frame-title">Выполнено за 2 недели:</h2>
                    </div>
                </div>

                <div className="frame personal-tasks-frame">
                    <h2 className="frame-title">Персональные задачи:</h2>
                </div>
            </div>
        </div>
    );
};

export default Main;
