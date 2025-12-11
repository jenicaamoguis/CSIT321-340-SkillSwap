import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import EmptyState from '../components/EmptyState';
import LoadingSpinner from '../components/LoadingSpinner';
import Modal from '../components/Modal';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';
import './MySkillsPage.css';
import skillsApi from '../api/skillsApi';

function MySkillsPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    skillsApi
      .getMySkills()
      .then((data) => {
        if (!isMounted) return;
        setSkills(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to load your skills' });
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleDelete = (skill) => {
    setSelectedSkill(skill);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setShowDeleteModal(false);
    // call API to delete
    skillsApi
      .remove(selectedSkill.id)
      .then(() => {
        setSkills((cur) => cur.filter((s) => s.id !== selectedSkill.id));
        setAlert({ type: 'success', message: 'Skill deleted successfully!' });
        setTimeout(() => setAlert(null), 3000);
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to delete skill' });
      });
  };

  return (
    <div className="my-skills-page">
      <div className="page-container">
        <Modal
          isOpen={showDeleteModal}
          title="Delete Skill?"
          message={`Are you sure you want to delete "${selectedSkill?.title}"? This action cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteModal(false)}
          isDangerous
        />

        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        <div className="my-skills-header">
          <div>
            <h1>My Skills</h1>
            <p>Manage your skills and connect with others</p>
          </div>
          <Link to="/post-skill" className="btn btn-primary">
            + Post Skill
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : skills.length > 0 ? (
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-list-item">
                <div className="skill-info">
                  <h3 className="skill-name">{skill.title}</h3>
                  <div className="skill-details">
                    <span className="badge badge-primary">{skill.category}</span>
                    <span className={`level-badge level-${skill.skillLevel?.toLowerCase()}`}>
                      {skill.skillLevel}
                    </span>
                    <span className="rating">⭐ {skill.rating}</span>
                  </div>
                  <p className="skill-description">{skill.description}</p>
                </div>
                <div className="skill-actions">
                  <Link
                    to={`/skill/${skill.id}`}
                    className="btn btn-outline btn-sm"
                  >
                    View
                  </Link>
                  <button className="btn btn-ghost btn-sm">Edit</button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(skill)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="📋"
            title="No skills yet"
            message="Post your first skill to start connecting with the community"
            action={
              <Link to="/post-skill" className="btn btn-primary">
                Post Your First Skill
              </Link>
            }
          />
        )}
      </div>
    </div>
  );
}

export default MySkillsPage;
