import React from 'react';
import { Link } from 'react-router-dom';
import './SkillCard.css';

function SkillCard({ id, title, category, description, skillLevel, rating, reviews, offerType }) {
  const getRatingDisplay = (rate) => {
    if (!rate) return 'New';
    return `${parseFloat(rate).toFixed(1)}⭐`;
  };

  return (
    <div className="skill-card">
      <div className="skill-header">
        <h3 className="skill-title">{title}</h3>
        <span className={`skill-badge badge-${offerType}`}>
          {offerType === 'offer' ? 'Offering' : 'Seeking'}
        </span>
      </div>

      <div className="skill-category">
        <span className="badge badge-primary">{category}</span>
      </div>

      <p className="skill-description">{description}</p>

      <div className="skill-level">
        <span className="label">Level:</span>
        <span className={`level-badge level-${skillLevel?.toLowerCase()}`}>
          {skillLevel || 'Beginner'}
        </span>
      </div>

      <div className="skill-rating">
        <span className="rating">{getRatingDisplay(rating)}</span>
        <span className="reviews">({reviews || 0} reviews)</span>
      </div>

      <Link to={`/skill/${id}`} className="btn btn-primary btn-block">
        View Details
      </Link>
    </div>
  );
}

export default SkillCard;
