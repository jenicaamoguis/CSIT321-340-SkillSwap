import React from 'react';
import './Alert.css';

function Alert({ type = 'info', message, onClose }) {
  if (!message) return null;

  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-content">
        <p>{message}</p>
      </div>
      {onClose && (
        <button
          className="alert-close"
          onClick={onClose}
          aria-label="Close alert"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Alert;
