import React from 'react';
import './App.css'; // Add your corresponding CSS here

const App = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" required />
          <label>Password</label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
