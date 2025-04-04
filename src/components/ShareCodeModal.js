import React from 'react';
import './ComponentsStyles/ShareCodeModal.css';

const ShareCodeModal = ({ code, onClose }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        // Можно добавить уведомление об успешном копировании
    };

    return (
        <div className="sharecodemodal-share-modal-container">
            <div className="sharecodemodal-share-modal-content">
                <h2 className="sharecodemodal-share-modal-title">Поделиться предметом</h2>
                
                <div className="sharecodemodal-code-input-group">
                    <label className="sharecodemodal-code-label">Код</label>
                    <input 
                        type="text" 
                        value={code} 
                        readOnly 
                        className="sharecodemodal-code-input"
                    />
                </div>
    
                <div className="sharecodemodal-modal-buttons">
                    <button className="sharecodemodal-back-button" onClick={onClose}>
                        Назад
                    </button>
                    <button className="sharecodemodal-copy-button" onClick={handleCopy}>
                        Скопировать
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareCodeModal;