import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import './AuthPage.css';

function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setAlert({ type: 'danger', message: 'Please fill in all fields' });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setAlert({ type: 'danger', message: 'Passwords do not match' });
      return;
    }

    if (formData.password.length < 6) {
      setAlert({
        type: 'danger',
        message: 'Password must be at least 6 characters',
      });
      return;
    }

    setAlert({ type: 'success', message: 'Account created! Redirecting...' });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form">
          <h1 className="auth-title">Join SkillSwap</h1>
          <p className="auth-subtitle">Create your account and start sharing</p>

          {alert && (
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={() => setAlert(null)}
            />
          )}

          <form onSubmit={handleSubmit} className="form-group">
            <div className="input-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Create Account
            </button>
          </form>

          <p className="auth-link">
            Already have an account?{' '}
            <a href="/login" onClick={() => navigate('/login')}>
              Sign in
            </a>
          </p>
        </div>

        <div className="auth-illustration">
          <div className="illustration">
            <div className="circle-1">🚀</div>
            <div className="circle-2">💎</div>
            <div className="circle-3">🎯</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
