import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
//import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import"../styles/home.css"

const Home = () => {
  return (
    <Layout>
      <div className="home" >
        <div className="headerContainer">
           
          <h1>Register </h1>
          <p style={{color:" #88ff00"}}>Biggest Tournament in the corporate World</p>
          <Link to="/register">
            <button>Register Now</button>
          </Link>
      
        </div>
      </div>
    </Layout>
  );
};

export default Home;
