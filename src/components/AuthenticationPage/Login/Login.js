import React from "react";
import "./Login.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className="login-page">
      <div className="row">
        <div className="col-12">
          <div className="login-section">
            {hasAccount ? (
              <h4 className="login-title">Sign In</h4>
            ) : (
              <h4 className="login-title">Sign Up</h4>
            )}
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoFocus
              required
            />
            <p className="authentication-error-message"> {emailError} </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <p className="authentication-error-message"> {passwordError} </p>
            <p>
              We'll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
            <div className="button-container">
              {hasAccount ? (
                <>
                  <button className="login-button" onClick={handleLogin}>
                    Sign In
                  </button>
                  <p className="login-help-section">
                    Don't have an account? &nbsp;
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      <strong>Sign Up</strong>
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button className="login-button" onClick={handleSignup}>
                    Sign Up
                  </button>
                  <p className="login-help-section">
                    Already have an account? &nbsp;
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      <strong>Sign In</strong>
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
