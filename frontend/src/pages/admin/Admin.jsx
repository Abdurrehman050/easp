import React, { useState } from "react";
import "./Admin.scss";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulating authentication check
    if (username === "admin" && password === "123") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="admin">
      {isLoggedIn ? (
        <div className="admin-dashboard">
          <h2>Welcome, Admin!</h2>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
          <a href="/cat">
            <button className="manage-categories-button">
              Manage Categories
            </button>
          </a>
          {/* Render Admin Dashboard or Categories Management */}
        </div>
      ) : (
        <div className="login-form">
          <h2>Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
