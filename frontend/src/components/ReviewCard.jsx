import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <div className="reviewer-info">
          <div className="reviewer-avatar">
            {review.reviewerName?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h4 className="reviewer-name">{review.reviewerName}</h4>
            <span className="review-date">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="review-rating">
          {'⭐'.repeat(review.rating)}
        </div>
      </div>

      <p className="review-text">{review.comment}</p>

      {review.skill && (
        <div className="review-skill">
          <span className="skill-tag">{review.skill}</span>
        </div>
      )}
    </div>
  );
}

export default ReviewCard;
