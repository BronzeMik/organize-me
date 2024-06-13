import React, { useState } from 'react';

function EmailModal({ email, isOpen, onClose }) {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{email?.subject}</h3>
        <div dangerouslySetInnerHTML={{ __html: email?.body }} />
      </div>
    </div>
  );
}

export default EmailModal;
