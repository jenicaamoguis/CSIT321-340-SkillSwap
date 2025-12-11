import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import Filter from '../components/Filter';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

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
    // Simulate API call
    setTimeout(() => {
      setSkills([
        {
          id: 1,
          title: 'React Development',
          category: 'Programming',
          description: 'Learn modern React with hooks and context API',
          skillLevel: 'Intermediate',
          rating: 4.8,
          reviews: 24,
          offerType: 'offer',
        },
        {
          id: 2,
          title: 'Web Design',
          category: 'Design',
          description: 'UI/UX design principles and tools',
          skillLevel: 'Advanced',
          rating: 4.6,
          reviews: 18,
          offerType: 'offer',
        },
        {
          id: 3,
          title: 'Spanish Language',
          category: 'Languages',
          description: 'Conversational Spanish lessons',
          skillLevel: 'Beginner',
          rating: 4.9,
          reviews: 32,
          offerType: 'seeking',
        },
        {
          id: 4,
          title: 'Digital Marketing',
          category: 'Marketing',
          description: 'Social media strategy and growth',
          skillLevel: 'Advanced',
          rating: 4.7,
          reviews: 21,
          offerType: 'offer',
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const filteredSkills = skills.filter((skill) => {
    if (selectedCategory && skill.category !== selectedCategory) return false;
    if (selectedLevel && skill.skillLevel !== selectedLevel) return false;
    return true;
  });

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="page-container">
          <div className="hero-content">
            <h1>Welcome to SkillSwap</h1>
            <p>
              Exchange skills with people around the world. Learn anything from
              anyone. Share what you know.
            </p>
            <div className="hero-actions">
              <Link to="/skills" className="btn btn-primary btn-lg">
                Browse Skills
              </Link>
              <Link to="/post-skill" className="btn btn-outline btn-lg">
                Post a Skill
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="page-container">
          <h2 className="section-title">How it works</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Browse</h3>
              <p>Find skills you want to learn from our community</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Connect</h3>
              <p>Message and connect with skill providers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Exchange</h3>
              <p>Swap your skills and learn together</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Review</h3>
              <p>Rate and review after your exchange</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="page-container">
          <h2 className="section-title">Featured Skills</h2>

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="skills-container">
              <div className="skills-sidebar">
                <Filter
                  categories={categories}
                  levels={levels}
                  onCategoryChange={setSelectedCategory}
                  onLevelChange={setSelectedLevel}
                />
              </div>

              <div className="skills-content">
                {filteredSkills.length > 0 ? (
                  <div className="grid grid-2">
                    {filteredSkills.map((skill) => (
                      <SkillCard key={skill.id} {...skill} />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    icon="🔎"
                    title="No skills found"
                    message="Try adjusting your filters or browse all skills"
                    action={
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setSelectedCategory('');
                          setSelectedLevel('');
                        }}
                      >
                        Clear Filters
                      </button>
                    }
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="page-container">
          <div className="cta-content">
            <h2>Ready to share your skills?</h2>
            <p>Post your first skill and start connecting with learners</p>
            <Link to="/post-skill" className="btn btn-primary btn-lg">
              Post Your Skill
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
