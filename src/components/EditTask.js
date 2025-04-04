import React, { useState, useEffect } from 'react';
import './ComponentsStyles/EditTask.css';

const EditTask = ({ task, onClose, onEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStartDate(task.deadlineStart);
      setEndDate(task.deadlineEnd);
    }
  }, [task]);

  const handleCancel = () => {
    if (onClose) onClose();
  };

  const handleSaveChanges = () => {
    onEdit({
      title,
      description,
      deadlineStart: startDate,
      deadlineEnd: endDate,
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
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                    type="date"
                    className="edittask-input-field"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <div className="edittask-butons-container">
                <button className="edittask-cancel-button" onClick={handleCancel}>
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
