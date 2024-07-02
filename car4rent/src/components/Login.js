import React, { useState } from 'react';
import './Login.css';
import './content'

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For simplicity, hardcoded username and password
    if (username === 'admin' && password === 'password') {
      onLogin(); // Trigger login action in App component
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Car Rental App</h1>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
