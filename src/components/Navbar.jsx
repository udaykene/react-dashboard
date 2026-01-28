import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2 className="logo">My App</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/logout">Logout</Link>

                {/* THIS IS THE DASHBOARD OPTION */}
                <Link to="/dashboard">Dashboard</Link>

                <div className="profile">
                    <button onClick={() => setOpen(!open)}>
                        Profile ▼
                    </button>

                    {open && (
                        <div className="dropdown">
                            <Link to="/activity" onClick={() => setOpen(false)}>
                                My Activity
                            </Link>
                            <Link to="/history" onClick={() => setOpen(false)}>
                                History
                            </Link>
                            <Link to="/profile" onClick={() => setOpen(false)}>
                                View Profile
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
