import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrowseSkillsPage from './pages/BrowseSkillsPage';
import SkillDetailPage from './pages/SkillDetailPage';
import MySkillsPage from './pages/MySkillsPage';
import PostSkillPage from './pages/PostSkillPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<BrowseSkillsPage />} />
            <Route path="/skill/:id" element={<SkillDetailPage />} />
            <Route path="/my-skills" element={<MySkillsPage />} />
            <Route path="/post-skill" element={<PostSkillPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
