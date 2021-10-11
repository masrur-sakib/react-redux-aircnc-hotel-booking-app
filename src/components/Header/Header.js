import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ userLoggedIn }) => {
  return (
    <div className="site-navbar">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="site-name" style={{ textDecoration: "none" }} to="/">
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
              {userLoggedIn === true ? (
                <li className="nav-item">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <button className="nav-link button-logout">Log Out</button>
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      style={{ textDecoration: "none" }}
                      to="/login"
                    >
                      Log In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <button className="nav-link button-signup">
                        Sign Up
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userLoggedIn: state.userLoggedIn,
  };
};

export default connect(mapStateToProps, null)(Header);
