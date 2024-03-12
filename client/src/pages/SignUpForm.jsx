import React, { useState } from 'react';
import Axios from 'axios';
import '../styles/Login.css';
import { Link } from 'react-router-dom'; 
import Layout from "../components/Layout/Layout";


const SignUpForm = () => {
  const [organization_name, setOrganization_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3700/register", { organization_name, email, password, confirm_password })
      .then((res) => {
        alert("Data saved Successfully");
        console.log(`Data Saved ${res.data}`);
      })
      .catch((err) => console.log(`Error is going on : ${err}`));
      alert(" failed. Please try again."); 

  };

  return (
    <Layout>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="wrapper">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center mb-4">Sign Up</h1>
              <div className="form-group">
                <label htmlFor="organization_name">Organization Name:</label>
                <input
                  type="text"
                  id="organization_name"
                  name="organization_name"
                  className="form-control"
                  placeholder="Enter your organization name"
                  value={organization_name}
                  onChange={(e) => setOrganization_name(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm_password">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={confirm_password}
                  onChange={(e) => setConfirm_password(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
              <div className="register-link mt-3">
                <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default SignUpForm;
