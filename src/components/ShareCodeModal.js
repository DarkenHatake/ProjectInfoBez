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
        <div className="login-modal-overlay">
        <div className="sharecodemodal-share-modal-container">
            <div className="sharecodemodal-share-modal-content">
                <h2 className="sharecodemodal-share-modal-title">Поделиться предметом</h2>
                <div className="sharecodemodal-code-input-group">
                    <label className="sharecodemodal-code-label">Код:</label>
                    <input className ="sharecodemodal-code-input" type="text" value={code} readOnly />
                </div>
                <div className="sharecodemodal-modal-buttons">
                    <button className="sharecodemodal-back-button" onClick={onClose}>Назад</button>
                    <button className="sharecodemodal-copy-button" onClick={handleCopy}>Скопировать</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ShareCodeModal;