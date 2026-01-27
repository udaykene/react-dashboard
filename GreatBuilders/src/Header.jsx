import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/admin/dashboard');
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">GreatBuilders</h1>
        <div className="header-buttons">
          <button className="btn-dashboard" onClick={handleDashboard}>
            Dashboard
          </button>
          <button className="btn-login">Login</button>
          <button className="btn-profile">Profile ▼</button>
          <button className="btn-logout">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
