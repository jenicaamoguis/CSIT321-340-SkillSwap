import React from 'react';
import './MessageItem.css';

function MessageItem({ message, isOwn }) {
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`message-item ${isOwn ? 'own' : 'other'}`}>
      <div className="message-bubble">
        <p className="message-text">{message.content}</p>
        <span className="message-time">{formatTime(message.timestamp)}</span>
      </div>
    </div>
  );
}

export default MessageItem;
