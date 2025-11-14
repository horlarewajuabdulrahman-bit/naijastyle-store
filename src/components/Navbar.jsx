// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, setUser, cartCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/signout");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <h1>NaijaStyle</h1>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartCount})</Link>
        </li>
      </ul>

      <div className="navbar-auth">
        {user ? (
          <>
            <span className="welcome-text">
              Hello, {user.name || user.email}
            </span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
            <button onClick={() => navigate("/signup")} className="signup-btn">
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;