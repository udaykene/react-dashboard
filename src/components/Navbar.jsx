import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import DashboardDropdown from "./DashboardDropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dashboardDropdown, setDashboardDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          NATURE
          <Icons.FaTree />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            if (item.title === "Dashboard") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDashboardDropdown(true)}
                  onMouseLeave={() => setDashboardDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dashboardDropdown && <DashboardDropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
