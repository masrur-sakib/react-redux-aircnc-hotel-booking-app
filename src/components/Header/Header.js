import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="site-navbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link
              className="site-name"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Aircnc
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="#"
                  >
                    Host Your Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="#"
                  >
                    Host Your Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="#"
                  >
                    Help
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    style={{ textDecoration: "none" }}
                    to="#"
                  >
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link button-signup">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
