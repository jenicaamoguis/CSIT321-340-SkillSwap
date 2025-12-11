import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import './PostSkillPage.css';
import skillsApi from '../api/skillsApi';

function PostSkillPage() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    level: '',
    type: 'offer',
  });

  const categories = [
    'Programming',
    'Design',
    'Marketing',
    'Music',
    'Languages',
    'Sports',
    'Cooking',
    'Business',
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.category ||
      !formData.description ||
      !formData.level
    ) {
      setAlert({
        type: 'danger',
        message: 'Please fill in all fields',
      });
      return;
    }

    // Call API to create skill
    skillsApi
      .create(formData)
      .then((res) => {
        setAlert({ type: 'success', message: 'Skill posted successfully!' });
        setTimeout(() => navigate('/my-skills'), 1200);
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to post skill' });
      });
  };

  return (
    <div className="post-skill-page">
      <div className="page-container">
        <div className="post-header">
          <h1>Post a Skill</h1>
          <p>Share your expertise with the SkillSwap community</p>
        </div>

        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}

        <div className="post-container">
          <div className="post-form-section">
            <form onSubmit={handleSubmit} className="form-group">
              <div className="input-field">
                <label htmlFor="title">Skill Title</label>
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="e.g., React Development, Spanish Lessons"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="input-field">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-field">
                  <label htmlFor="level">Skill Level</label>
                  <select
                    id="level"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                  >
                    <option value="">Select a level</option>
                    {levels.map((lvl) => (
                      <option key={lvl} value={lvl}>
                        {lvl}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="input-field">
                <label htmlFor="type">Are you offering or seeking?</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="offer">Offering this skill</option>
                  <option value="seeking">Seeking this skill</option>
                </select>
              </div>

              <div className="input-field">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe what you're offering or looking for. Be detailed and specific."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-lg btn-block">
                Post Skill
              </button>
            </form>
          </div>

          <div className="post-guide">
            <div className="guide-card">
              <h3>✅ Tips for a great post</h3>
              <ul>
                <li>Use a clear, descriptive title</li>
                <li>Pick the right category</li>
                <li>Be honest about your skill level</li>
                <li>Write a detailed description</li>
                <li>Include what learners will gain</li>
                <li>Mention availability</li>
              </ul>
            </div>

            <div className="guide-card">
              <h3>💡 Examples</h3>
              <div className="example">
                <h4>Good</h4>
                <p>
                  "Teach React with focus on Hooks and state management. 6+
                  years experience building production apps."
                </p>
              </div>
              <div className="example">
                <h4>Better</h4>
                <p>
                  "Expert React development with Hooks, Context API, and
                  performance optimization. Real-world projects included."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSkillPage;
