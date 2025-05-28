import React, {useEffect, useState} from 'react';
import { updatePersonalTask } from '../api'; // Изменяем на персональные задачи
import './ComponentsStyles/EditTask.css'

const EditTask = ({ task, onClose, onEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(''); // Только одна дата

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            // Используем deadlineEnd или deadline, в зависимости от вашей структуры
            setDeadline(task.deadline || task.deadlineEnd || '');
        }
    }, [task]);

    const handleSaveChanges = () => {
        const updatedTask = {
            title,
            description,
            deadline, // Только одно поле с датой
        };

        // Используем updatePersonalTask вместо updateSubjectTask
        updatePersonalTask(task.id, updatedTask)
            .then(() => {
                onEdit(updatedTask);
                onClose();
            })
            .catch((err) => {
                console.error('Ошибка при обновлении задачи:', err);
            });
    };

    return (
        <div className="edittask-edit-task-wrapper">
            <div className="edittask-edit-task-container">
                <h2 className="edittask-form-title">Редактирование задачи</h2>
                <input
                    type="text"
                    className="edittask-input-field"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название задачи"
                />
                <textarea
                    className="edittask-textarea-field"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Описание задачи"
                />
                <div className="edittask-date-fields">
                    <input
                        type="date"
                        className="edittask-input-field"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>
                <div className="edittask-buttons-container">
                    <button className="edittask-cancel-button" onClick={onClose}>
                        Отмена
                    </button>
                    <button className="edittask-save-button" onClick={handleSaveChanges}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTask;