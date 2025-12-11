import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import Filter from '../components/Filter';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import Alert from '../components/Alert';
import './BrowseSkillsPage.css';
import skillsApi from '../api/skillsApi';

function BrowseSkillsPage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [alert, setAlert] = useState(null);

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

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    skillsApi
      .getAll()
      .then((data) => {
        if (!isMounted) return;
        // assuming backend returns array
        setSkills(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        setAlert({ type: 'danger', message: err.message || 'Failed to load skills' });
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredSkills = skills.filter((skill) => {
    if (selectedCategory && skill.category !== selectedCategory) return false;
    if (selectedLevel && skill.skillLevel !== selectedLevel) return false;
    if (
      searchQuery &&
      !skill.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="browse-skills-page">
      <div className="page-container">
        <div className="browse-header">
          <h1>Browse Skills</h1>
          <p>Find skills to learn or people to exchange with</p>
        </div>

        {alert && (
          <div style={{ marginBottom: 12 }}>
            <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />
          </div>
        )}

        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="browse-container">
            <div className="browse-sidebar">
              <Filter
                categories={categories}
                levels={levels}
                onCategoryChange={setSelectedCategory}
                onLevelChange={setSelectedLevel}
              />
            </div>

            <div className="browse-content">
              <div className="results-header">
                <p className="results-count">
                  Showing {filteredSkills.length} skill
                  {filteredSkills.length !== 1 ? 's' : ''}
                </p>
                {(selectedCategory || selectedLevel) && (
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedLevel('');
                    }}
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {filteredSkills.length > 0 ? (
                <div className="grid grid-2">
                  {filteredSkills.map((skill) => (
                    <SkillCard key={skill.id} {...skill} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon="🔍"
                  title="No skills found"
                  message="Try adjusting your filters or search query"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseSkillsPage;
