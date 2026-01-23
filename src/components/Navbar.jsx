import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Sakhi</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li
          className="profile"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Profile ▾
          {open && (
            <ul className="dropdown">
              <li><Link to="/activity">My Activity</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/view-profile">View Profile</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/login">Login</Link></li>
        <li><button className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
