import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Home
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/company-details" className="nav-links">Company Details</Link>
          </li>
          <li className="nav-item">
            <Link to="/landlord" className="nav-links">Landlord/Asset’s Owner</Link>
          </li>
          <li className="nav-item">
            <Link to="/tenant" className="nav-links">Tenant</Link>
          </li>
          <li className="nav-item">
            <Link to="/commissionaires" className="nav-links">Commissionaires</Link>
          </li>
          <li className="nav-item">
            <Link to="/updates" className="nav-links">Updates</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
