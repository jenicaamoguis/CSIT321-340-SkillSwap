import React from 'react';
import './UserProfileCard.css';

function UserProfileCard({ user, onMessage, onConnect }) {
  return (
    <div className="user-profile-card">
      <div className="profile-avatar">
        <div className="avatar-image">{user.name?.charAt(0).toUpperCase()}</div>
      </div>

      <div className="profile-info">
        <h3 className="profile-name">{user.name}</h3>
        <p className="profile-title">{user.title || 'Skill Enthusiast'}</p>
        <p className="profile-bio">{user.bio || 'No bio provided'}</p>

        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">{user.skillsOffered || 0}</span>
            <span className="stat-label">Skills Offered</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user.rating?.toFixed(1) || 'N/A'}</span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat">
            <span className="stat-value">{user.connections || 0}</span>
            <span className="stat-label">Connections</span>
          </div>
        </div>

        <div className="profile-actions">
          {onMessage && (
            <button className="btn btn-outline btn-sm" onClick={onMessage}>
              💬 Message
            </button>
          )}
          {onConnect && (
            <button className="btn btn-primary btn-sm" onClick={onConnect}>
              🤝 Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
