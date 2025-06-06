
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === 'ADMIN123') {
      navigate('/admin');
    } else {
      const clients = JSON.parse(localStorage.getItem('clients') || '[]');
      const clientMatch = clients.find((client) => client.code === password);
      if (clientMatch) {
        localStorage.setItem('activeClient', JSON.stringify(clientMatch));
        navigate('/dashboard');
      } else {
        setError('Invalid password');
      }
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Customer Portal Login</h2>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
