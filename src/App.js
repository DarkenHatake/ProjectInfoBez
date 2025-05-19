import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Main from './components/Main';
import Object from './components/Object';
import PersonalTasks from './components/PersonalTasks';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import ItemPage from './components/ItemPage'; // Импортируем новый компонент

// Главный компонент приложения
const App = () => {
    
    // Состояние для хранения задач (пока локальное, потом заменится на бэкенд)
    const [tasks, setTasks] = useState([]);
    return (
        <div className="app">
            <Router>
                <div>
                    {/* Навигация */}
                    <Navigation />
                    {/* Маршруты */}
                    <Routes>
                        <Route path="/" element={<Main personalTasks={tasks}/>} />
                        <Route path="/objects" element={<Object />} />
                        <Route path="/personal-tasks" element={<PersonalTasks tasks={tasks} setTasks={setTasks} />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/item-page/:id" element={<ItemPage />} /> {/* Добавляем маршрут для ItemPage */}
                    </Routes>
                </div>
            </Router>
        </div>
    );
};
 
export default App;
