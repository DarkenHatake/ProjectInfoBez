import React from 'react';
import './ComponentsStyles/Main.css'; // Подключаем стили

const Main = () => {
  return (
    <div className="main-container">
      {/* Надпись "Дашборд" */}
      <h1 className="dashboard-title">Дашборд</h1>

      {/* Рамка "Предметы" */}
      <div className="frame subjects-frame">
        <h2 className="frame-title">Предметы:</h2>
      </div>

      {/* Рамка "Выполнено за 2 недели" */}
      <div className="frame completed-frame">
        <h2 className="frame-title">Выполнено за 2 недели:</h2>
      </div>

      {/* Рамка "Персональные задачи" */}
      <div className="frame personal-tasks-frame">
        <h2 className="frame-title">Персональные задачи:</h2>
      </div>
    </div>
  );
};

export default Main;