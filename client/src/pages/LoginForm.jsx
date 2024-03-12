import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import Axios from 'axios';
import Layout from "../components/Layout/Layout";

function LoginForm() {
  const navigate = useNavigate();
  const [organization_id, setOrganizationId] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3700/login", { organization_id, password })
      .then((res) => {
        alert("Login Successful"); 
        console.log(`Data Saved ${res.data}`);
        // Redirect to the dynamic organization ID route
        navigate(`/home/${organization_id}`); // Redirect after successful login
      })
      .catch((err) => {
        console.log(`Error occurred during login: ${err}`);
        alert("Login failed. Please try again."); 
      });
  };

  return (
    <Layout>
      <div className="wrapper">
        <form onSubmit={handleSubmit}> 
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Organization Id"
              value={organization_id} 
              onChange={(e) => setOrganizationId(e.target.value)} 
              required
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <i className='bx bxs-lock-alt' ></i>
          </div>
          <div className="remember-forgot">
            <a href="https://example.com">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>
              Don't have an account? 
              <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default LoginForm;
