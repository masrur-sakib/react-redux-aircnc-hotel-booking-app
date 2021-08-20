import React from "react";
import "./AfterLogin.css";

const AfterLogin = ({ handleLogout }) => {
  return (
    <div>
      <div className="after-login-section">
        <h4>Welcome</h4>
        <div className="logout-button-container">
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AfterLogin;
