import React, { useState, useEffect } from 'react';
import UserProfileCard from '../components/UserProfileCard';
import ReviewCard from '../components/ReviewCard';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import usersApi from '../api/usersApi';
import Alert from '../components/Alert';

function ProfilePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const [editForm, setEditForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    let mounted = true;
    usersApi
      .getProfile('me')
      .then((data) => {
        if (!mounted) return;
        setProfileData(data);
        setEditForm(data || {});
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to load profile' });
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const reviews = [
    {
      id: 1,
      reviewerName: 'John Doe',
      date: '2024-01-15',
      rating: 5,
      comment: 'Amazing teacher! Very patient and knowledgeable.',
      skill: 'React Development',
    },
    {
      id: 2,
      reviewerName: 'Jane Smith',
      date: '2024-01-10',
      rating: 4,
      comment: 'Great content, highly recommended!',
      skill: 'JavaScript Basics',
    },
  ];

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    usersApi
      .updateProfile('me', editForm)
      .then((res) => {
        setProfileData(res || editForm);
        setIsEditing(false);
        setAlert({ type: 'success', message: 'Profile updated' });
        setTimeout(() => setAlert(null), 2500);
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to update profile' });
      });
  };

  if (loading) return <div className="page-container">Loading...</div>;

  return (
    <div className="profile-page">
      <div className="page-container">
        {alert && (
          <div style={{ marginBottom: 12 }}>
            <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
          </div>
        )}
        <div className="profile-content">
          <div className="profile-sidebar">
            <UserProfileCard
              user={profileData}
              onMessage={() => navigate('/messages')}
            />
          </div>

          <div className="profile-main">
            {isEditing ? (
              <section className="profile-section">
                <h2>Edit Profile</h2>
                <form className="form-group">
                  <div className="input-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={editForm.name}
                      onChange={handleEditChange}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input
                      id="title"
                      type="text"
                      name="title"
                      value={editForm.title}
                      onChange={handleEditChange}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={editForm.email}
                      onChange={handleEditChange}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="location">Location</label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      value={editForm.location}
                      onChange={handleEditChange}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={editForm.bio}
                      onChange={handleEditChange}
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSaveProfile}
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline"
                      onClick={() => {
                        setEditForm(profileData);
                        setIsEditing(false);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </section>
            ) : (
              <>
                <section className="profile-section">
                  <div className="section-header">
                    <h2>About</h2>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => {
                        setEditForm(profileData);
                        setIsEditing(true);
                      }}
                    >
                      Edit Profile
                    </button>
                  </div>

                  <div className="about-content">
                    <div className="about-item">
                      <label>Name</label>
                      <p>{profileData.name}</p>
                    </div>
                    <div className="about-item">
                      <label>Title</label>
                      <p>{profileData.title}</p>
                    </div>
                    <div className="about-item">
                      <label>Location</label>
                      <p>{profileData.location}</p>
                    </div>
                    <div className="about-item">
                      <label>Email</label>
                      <p>{profileData.email}</p>
                    </div>
                    <div className="about-item full-width">
                      <label>Bio</label>
                      <p>{profileData.bio}</p>
                    </div>
                  </div>
                </section>

                <section className="profile-section">
                  <h2>Reviews ({reviews.length})</h2>
                  <div className="reviews-container">
                    {reviews.map((review) => (
                      <ReviewCard key={review.id} review={review} />
                    ))}
                  </div>
                </section>

                <section className="profile-section">
                  <h2>Account Settings</h2>
                  <div className="settings-list">
                    <button className="setting-item">
                      <span>Change Password</span>
                      <span>→</span>
                    </button>
                    <button className="setting-item">
                      <span>Privacy Settings</span>
                      <span>→</span>
                    </button>
                    <button className="setting-item">
                      <span>Notification Preferences</span>
                      <span>→</span>
                    </button>
                    <button className="setting-item danger">
                      <span>Delete Account</span>
                      <span>→</span>
                    </button>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
