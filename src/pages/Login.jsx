import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (passwordInput === 'ADMIN123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      const clients = JSON.parse(localStorage.getItem('clients')) || [];
      const client = clients.find((c) => c.password === passwordInput);

      if (client) {
        localStorage.setItem('clientCode', client.code);
        navigate('/dashboard');
      } else {
        setError('Invalid password');
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Client Login</h2>
        <input
          type="password"
          placeholder="Enter your code"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
