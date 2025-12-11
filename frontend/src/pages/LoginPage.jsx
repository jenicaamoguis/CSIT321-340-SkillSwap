import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import './AuthPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert({ type: 'danger', message: 'Please fill in all fields' });
      return;
    }

    // Simulate login
    setAlert({ type: 'success', message: 'Login successful! Redirecting...' });
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your SkillSwap account</p>

          {alert && (
            <Alert
              type={alert.type}
              message={alert.message}
              onClose={() => setAlert(null)}
            />
          )}

          <form onSubmit={handleSubmit} className="form-group">
            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Sign In
            </button>
          </form>

          <p className="auth-link">
            Don't have an account?{' '}
            <a href="/signup" onClick={() => navigate('/signup')}>
              Sign up
            </a>
          </p>
        </div>

        <div className="auth-illustration">
          <div className="illustration">
            <div className="circle-1">⭐</div>
            <div className="circle-2">🤝</div>
            <div className="circle-3">💡</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
