import React, { useState } from 'react';

function EmailModal({ email, isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content flex flex-col items-center justify-center">
        <span className="close" onClick={onClose}></span>
        <h3>{email?.subject}</h3>
        <div dangerouslySetInnerHTML={{ __html: email?.body }} />
        <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 10px;          
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
        }
      `}</style>
      </div>
    </div>
  );
}

export default EmailModal;
