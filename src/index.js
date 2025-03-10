import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Получаем корневой элемент из DOM
const container = document.getElementById('root');

// Создаем корень с помощью createRoot
const root = createRoot(container);

// Рендерим компонент
root.render(
    <App/>,
);