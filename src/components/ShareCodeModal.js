// ShareCodeModal.js

import React from 'react';
import './ComponentsStyles/ShareCodeModal.css'

const ShareCodeModal = ({ code, onClose }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code).then(() => {
            alert('Код скопирован!');
        });
    };

    return (
        <div className="sharecodemodal-share-modal-container">
            <div className="sharecodemodal-share-modal-content">
                <h2>Поделиться предметом</h2>
                <div className="sharecodemodal-code-input-group">
                    <label>Код:</label>
                    <input type="text" value={code} readOnly />
                </div>
                <div className="sharecodemodal-modal-buttons">
                    <button onClick={onClose}>Назад</button>
                    <button onClick={handleCopy}>Скопировать</button>
                </div>
            </div>
        </div>
    );
};

export default ShareCodeModal;