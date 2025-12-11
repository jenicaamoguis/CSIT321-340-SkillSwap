import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserProfileCard from '../components/UserProfileCard';
import ReviewCard from '../components/ReviewCard';
import Modal from '../components/Modal';
import Alert from '../components/Alert';
import LoadingSpinner from '../components/LoadingSpinner';
import './SkillDetailPage.css';
import skillsApi from '../api/skillsApi';

function SkillDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    skillsApi
      .getById(id)
      .then((data) => {
        if (!isMounted) return;
        setSkill(data);
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to load skill' });
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleConnect = () => {
    setAlert({
      type: 'success',
      message: 'Connection request sent! Check your messages.',
    });
    setTimeout(() => setAlert(null), 3000);
  };

  const handleMessage = () => {
    navigate('/messages');
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    setShowModal(false);
    // call API to delete
    skillsApi
      .remove(skill.id)
      .then(() => {
        setAlert({ type: 'success', message: 'Skill deleted successfully!' });
        setTimeout(() => navigate('/my-skills'), 1200);
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to delete skill' });
      });
  };

  if (loading) return <LoadingSpinner />;
  if (!skill) return <div className="page-container">Skill not found</div>;

  return (
    <div className="skill-detail-page">
      <div className="page-container">
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        <Modal
          isOpen={showModal}
          title="Delete Skill?"
          message="Are you sure you want to delete this skill? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
          isDangerous
        />

        <div className="detail-header">
          <div>
            <div className="breadcrumb">
              <Link to="/skills">Browse Skills</Link>
              <span>/</span>
              <span>{skill.title}</span>
            </div>
            <h1>{skill.title}</h1>
            <div className="detail-meta">
              <span className="badge badge-primary">{skill.category}</span>
              <span className="badge badge-secondary">{skill.skillLevel}</span>
              <span className="rating-badge">⭐ {skill.rating}</span>
            </div>
          </div>
          <div className="detail-actions">
            <button className="btn btn-primary">Contact Provider</button>
            <button className="btn btn-outline">Save Skill</button>
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-main">
            <section className="detail-section">
              <h2>About this Skill</h2>
              <p>{skill.fullDescription}</p>
            </section>

            <section className="detail-section">
              <h2>What you'll learn</h2>
              <ul className="learning-list">
                <li>Fundamentals of React and JSX</li>
                <li>React Hooks and Custom Hooks</li>
                <li>State management with Context API</li>
                <li>Component lifecycle and optimization</li>
                <li>Real-world project patterns</li>
              </ul>
            </section>

            <section className="detail-section">
              <h2>Reviews ({skill.reviews.length})</h2>
              <div className="reviews-container">
                {skill.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </section>
          </div>

          <div className="detail-sidebar">
            <UserProfileCard
              user={skill.provider}
              onMessage={handleMessage}
              onConnect={handleConnect}
            />

            <div className="card mt-md">
              <h3 className="card-title">Details</h3>
              <div className="detail-info">
                <div className="info-row">
                  <span className="info-label">Type:</span>
                  <span className="info-value capitalize">
                    {skill.offerType}
                  </span>
                </div>
                <div className="info-row">
                  <span className="info-label">Level:</span>
                  <span className="info-value">{skill.skillLevel}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Category:</span>
                  <span className="info-value">{skill.category}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Rating:</span>
                  <span className="info-value">⭐ {skill.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetailPage;
