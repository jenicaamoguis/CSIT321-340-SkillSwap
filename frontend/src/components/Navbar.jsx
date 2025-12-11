import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Browse Skills', path: '/skills' },
    { label: 'My Skills', path: '/my-skills' },
    { label: 'Messages', path: '/messages' },
    { label: 'Profile', path: '/profile' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="navbar-logo">⚡</span>
          SkillSwap
        </Link>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${
                location.pathname === link.path ? 'active' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="navbar-actions">
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/signup" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
