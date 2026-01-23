import React, { useState } from 'react';

// Navbar Component
const Navbar = ({ setCurrentPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setCurrentPage('logout');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button onClick={() => handleNavigation('home')} className="nav-logo">
          GreatBuilders
        </button>

        <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMobileMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMobileMenuOpen ? 'bar active' : 'bar'}></span>
        </button>

        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <button onClick={() => handleNavigation('login')} className="nav-link">
              Login
            </button>
          </li>

          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" onClick={toggleDropdown}>
              Profile ▼
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button onClick={() => handleNavigation('my-activity')} className="dropdown-item">
                    My Activity
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('history')} className="dropdown-item">
                    History
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('profile')} className="dropdown-item">
                    View Profile
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <button className="nav-link logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">The story of</h1>
        <h2 className="hero-subtitle">GREATBUILDERS</h2>
        <div className="scroll-indicator">↓</div>
      </div>
    </div>
  );
};

// Login Page
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
    alert('Login submitted! Check console for details.');
  };

  return (
    <div className="content-page">
      <div className="form-container">
        <h1>Login</h1>
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handleSubmit} className="submit-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

// Profile Page
const Profile = () => {
  return (
    <div className="content-page">
      <div className="content-wrapper">
        <h1>View Profile</h1>
        <div className="profile-card">
          <div className="profile-avatar">GB</div>
          <h2>John Doe</h2>
          <p className="profile-email">john.doe@greatbuilders.com</p>
          <div className="profile-info">
            <div className="info-item">
              <span className="info-label">Member Since:</span>
              <span className="info-value">January 2024</span>
            </div>
            <div className="info-item">
              <span className="info-label">Role:</span>
              <span className="info-value">Developer</span>
            </div>
            <div className="info-item">
              <span className="info-label">Projects:</span>
              <span className="info-value">12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// My Activity Page
const MyActivity = () => {
  const activities = [
    { id: 1, action: 'Logged in', time: '2 hours ago' },
    { id: 2, action: 'Updated profile', time: '5 hours ago' },
    { id: 3, action: 'Completed task', time: '1 day ago' },
    { id: 4, action: 'Joined project', time: '2 days ago' }
  ];

  return (
    <div className="content-page">
      <div className="content-wrapper">
        <h1>My Activity</h1>
        <div className="activity-list">
          {activities.map(activity => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">●</div>
              <div className="activity-details">
                <h3>{activity.action}</h3>
                <p>{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// History Page
const History = () => {
  const historyItems = [
    { id: 1, title: 'Project Alpha', date: 'Jan 20, 2026', status: 'Completed' },
    { id: 2, title: 'Project Beta', date: 'Jan 15, 2026', status: 'In Progress' },
    { id: 3, title: 'Project Gamma', date: 'Jan 10, 2026', status: 'Completed' },
    { id: 4, title: 'Project Delta', date: 'Jan 5, 2026', status: 'On Hold' }
  ];

  return (
    <div className="content-page">
      <div className="content-wrapper">
        <h1>History</h1>
        <div className="history-table">
          {historyItems.map(item => (
            <div key={item.id} className="history-row">
              <div className="history-title">{item.title}</div>
              <div className="history-date">{item.date}</div>
              <div className={`history-status status-${item.status.toLowerCase().replace(' ', '-')}`}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Logout Page
const Logout = ({ setCurrentPage }) => {
  return (
    <div className="content-page">
      <div className="content-wrapper logout-content">
        <h1>Logout Successful</h1>
        <p>You have been successfully logged out.</p>
        <button onClick={() => setCurrentPage('login')} className="btn-primary">Login Again</button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'profile':
        return <Profile />;
      case 'my-activity':
        return <MyActivity />;
      case 'history':
        return <History />;
      case 'logout':
        return <Logout setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #0a0a0a;
          color: #ffffff;
        }

        #root {
          width: 100%;
          min-height: 100vh;
        }

        /* Navbar Styles */
        .navbar {
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          padding: 1.2rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          z-index: 1000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 2rem;
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 1px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }

        .nav-logo:hover {
          color: #64b5f6;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem 1rem;
          font-family: inherit;
        }

        .nav-link:hover {
          color: #64b5f6;
        }

        .dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: rgba(20, 20, 20, 0.98);
          backdrop-filter: blur(10px);
          border-radius: 8px;
          margin-top: 0.5rem;
          min-width: 180px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          list-style: none;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dropdown-item {
          display: block;
          width: 100%;
          padding: 0.8rem 1.2rem;
          color: #ffffff;
          text-decoration: none;
          transition: background 0.2s ease;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: 1rem;
        }

        .dropdown-item:hover {
          background: rgba(100, 181, 246, 0.2);
        }

        .logout-btn {
          background: #e53935;
          color: white;
          border: none;
          padding: 0.6rem 1.8rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
          font-size: 1rem;
        }

        .logout-btn:hover {
          background: #c62828;
        }

        .mobile-menu-icon {
          display: none;
          flex-direction: column;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .bar {
          width: 25px;
          height: 3px;
          background: #ffffff;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 3px;
        }

        /* Hero Section - FULL SCREEN */
        .hero-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
                      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23164e63" width="1200" height="600"/><path fill="%23083344" d="M0 300L50 325L100 300L150 350L200 325L250 375L300 350L350 400L400 375L450 425L500 400L550 450L600 425L650 475L700 450L750 500L800 475L850 525L900 500L950 550L1000 525L1050 575L1100 550L1150 600L1200 575V600H0Z"/></svg>') center/cover;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(100, 181, 246, 0.2), transparent 70%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          text-align: center;
          z-index: 10;
          padding: 2rem;
        }

        .hero-title {
          font-size: 4rem;
          font-style: italic;
          font-weight: 300;
          margin-bottom: 2rem;
          opacity: 0.95;
          text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.7);
        }

        .hero-subtitle {
          font-size: 8rem;
          font-weight: bold;
          letter-spacing: 10px;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 0%, #64b5f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 3rem;
          text-shadow: 0 0 30px rgba(100, 181, 246, 0.5);
          line-height: 1.2;
        }

        .scroll-indicator {
          font-size: 3rem;
          animation: bounce 2s infinite;
          opacity: 0.8;
          margin-top: 2rem;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-15px);
          }
          60% {
            transform: translateY(-8px);
          }
        }

        /* Content Pages */
        .content-page {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          padding-top: 100px;
        }

        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .content-wrapper h1 {
          font-size: 3rem;
          margin-bottom: 2.5rem;
          background: linear-gradient(135deg, #ffffff 0%, #64b5f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Form Styles */
        .form-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .form-container h1 {
          font-size: 3rem;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #64b5f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .login-form {
          background: rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #64b5f6;
          font-size: 1rem;
        }

        .form-group input {
          width: 100%;
          padding: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 1rem;
          transition: border 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #64b5f6;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #64b5f6 0%, #2196f3 100%);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
        }

        /* Profile Card */
        .profile-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 3rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .profile-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #64b5f6 0%, #2196f3 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: bold;
          margin: 0 auto 1.5rem;
        }

        .profile-card h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .profile-email {
          color: #64b5f6;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
        }

        .info-label {
          color: #888;
          font-size: 1.05rem;
        }

        .info-value {
          font-weight: 600;
          font-size: 1.05rem;
        }

        /* Activity List */
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .activity-item {
          display: flex;
          gap: 1.2rem;
          padding: 1.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border-left: 4px solid #64b5f6;
        }

        .activity-icon {
          color: #64b5f6;
          font-size: 1.8rem;
        }

        .activity-details h3 {
          margin-bottom: 0.4rem;
          font-size: 1.2rem;
        }

        .activity-details p {
          color: #888;
          font-size: 1rem;
        }

        /* History Table */
        .history-table {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .history-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 1.5rem;
          padding: 1.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          align-items: center;
        }

        .history-title {
          font-size: 1.15rem;
          font-weight: 600;
        }

        .history-date {
          color: #888;
          font-size: 1rem;
        }

        .history-status {
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          text-align: center;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .status-completed {
          background: rgba(76, 175, 80, 0.2);
          color: #4caf50;
        }

        .status-in-progress {
          background: rgba(255, 193, 7, 0.2);
          color: #ffc107;
        }

        .status-on-hold {
          background: rgba(158, 158, 158, 0.2);
          color: #9e9e9e;
        }

        /* Logout Content */
        .logout-content {
          text-align: center;
          padding-top: 5rem;
        }

        .logout-content h1 {
          margin-bottom: 1.5rem;
        }

        .logout-content p {
          margin-bottom: 2.5rem;
          font-size: 1.3rem;
          color: #888;
        }

        .btn-primary {
          display: inline-block;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #64b5f6 0%, #2196f3 100%);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          transition: transform 0.2s ease;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 1.1rem;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .mobile-menu-icon {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background: rgba(10, 10, 10, 0.98);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            padding: 2rem 0;
            gap: 0;
          }

          .nav-menu.active {
            left: 0;
          }

          .nav-item {
            margin: 1rem 0;
          }

          .dropdown-menu {
            position: static;
            margin-top: 0.5rem;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 4.5rem;
            letter-spacing: 5px;
          }

          .content-wrapper h1 {
            font-size: 2.2rem;
          }

          .history-row {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }

          .history-date, .history-status {
            justify-self: start;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 3rem;
            letter-spacing: 3px;
          }

          .content-wrapper h1 {
            font-size: 1.8rem;
          }

          .form-container h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default App;