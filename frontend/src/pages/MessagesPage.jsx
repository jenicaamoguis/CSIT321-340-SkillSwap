import React, { useState, useEffect } from 'react';
import MessageItem from '../components/MessageItem';
import EmptyState from '../components/EmptyState';
import LoadingSpinner from '../components/LoadingSpinner';
import Alert from '../components/Alert';
import './MessagesPage.css';
import messagesApi from '../api/messagesApi';

function MessagesPage() {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    messagesApi
      .getConversations()
      .then((data) => {
        if (!isMounted) return;
        setConversations(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        // keep simple for now
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    // load messages from API
    messagesApi
      .getMessages(conversation.id)
      .then((data) => {
        setMessages(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setMessages([]);
      });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      content: messageInput,
      timestamp: new Date().toISOString(),
      senderId: 'current_user',
    };

    // optimistic UI update
    setMessages((cur) => [...cur, newMessage]);
    setMessageInput('');

    if (selectedConversation) {
      messagesApi
        .sendMessage(selectedConversation.id, { content: newMessage.content })
        .catch(() => {
          // on error, show a simple console message and could show alert
          setAlert({ type: 'danger', message: 'Failed to send message' });
          setTimeout(() => setAlert(null), 3000);
        });
    }
  };

  const [alert, setAlert] = useState(null);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="messages-page">
      {alert && (
        <div style={{ padding: '0 16px' }}>
          <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
        </div>
      )}
      <div className="messages-container">
        <div className="conversations-list">
          <h2>Messages</h2>
          {conversations.length > 0 ? (
            <div className="conversations">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`conversation-item ${
                    selectedConversation?.id === conversation.id ? 'active' : ''
                  } ${conversation.unread ? 'unread' : ''}`}
                  onClick={() => handleSelectConversation(conversation)}
                >
                  <div className="conversation-avatar">
                    {conversation.avatar}
                  </div>
                  <div className="conversation-info">
                    <h4 className="conversation-name">{conversation.name}</h4>
                    <p className="conversation-preview">
                      {conversation.lastMessage}
                    </p>
                    <span className="conversation-time">
                      {new Date(conversation.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon="💬"
              title="No conversations"
              message="Start connecting with others to begin messaging"
            />
          )}
        </div>

        <div className="chat-section">
          {selectedConversation ? (
            <>
              <div className="chat-header">
                <div className="chat-user">
                  <div className="chat-avatar">
                    {selectedConversation.avatar}
                  </div>
                  <h3>{selectedConversation.name}</h3>
                </div>
              </div>

              <div className="messages-list">
                {messages.map((message) => (
                  <MessageItem
                    key={message.id}
                    message={message}
                    isOwn={message.senderId === 'current_user'}
                  />
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="message-input-form">
                <input
                  type="text"
                  className="message-input"
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </>
          ) : (
            <EmptyState
              icon="👋"
              title="Select a conversation"
              message="Choose a conversation to start chatting"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
