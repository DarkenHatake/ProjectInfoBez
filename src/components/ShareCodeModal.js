import React from 'react';
import './ComponentsStyles/ShareCodeModal.css';

const ShareCodeModal = ({ code, onClose }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        // Можно добавить уведомление об успешном копировании
    };

    return (
        <div className="share-modal-container">
            <div className="share-modal-content">
                <h2 className="share-modal-title">Поделиться предметом</h2>
                
                <div className="code-input-group">
                    <label className="code-label">Код</label>
                    <input 
                        type="text" 
                        value={code} 
                        readOnly 
                        className="code-input"
                    />
                </div>
    
                <div className="modal-buttons">
                    <button className="back-button" onClick={onClose}>
                        Назад
                    </button>
                    <button className="copy-button" onClick={handleCopy}>
                        Скопировать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareCodeModal;