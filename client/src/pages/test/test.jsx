import React from "react";
import { Link } from 'react-router-dom';
//import cric from "../../images/banner.jpeg";
import cric1 from "../../images/1.jpg";
import cric2 from "../../images/paneer.jpg";
import cric3 from "../../images/idli.jpg"
//import cric4 from "../../images/banner.jpeg"
import cric6 from "../../images/Logo Created with Placeit's Logo Maker.jpeg"
import cric5 from "../../images/Agira.jpg"
import about1 from "../../images/about1.jpg"
import about2 from "../../images/about2.jpg"
import about3 from "../../images/about3.jpg"
import about4 from "../../images/about4.jpg"
import bg from "../../images/bg.jpg"

import "./styles.css";
export default function test() {
  return (
    <>
      
    <div>  
   
    <>
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
  <div className="container">
    <a className="navbar-brand" href="#page-top">
      <img src={cric1} alt="..." />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      Menu
      <i className="fas fa-bars ms-1" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#services">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/menu">
            ALL Tournament
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team">
            Team
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Welcome To Our Corporate Cricket!</div>
      <div className="masthead-heading text-uppercase">
        It's Nice To Meet You
      </div>
      <a className="btn btn-primary btn-xl text-uppercase" href="#services">
        Tell Me More
      </a>
    </div>
  </header>
  
  {/* Portfolio Grid*/}
  <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Tournaments around you</h2>
        <h3 className="section-subheading text-muted">
          You can Join in this by your organization id
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 1*/}
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                className="img-fluid"
                src={bg}
                alt="..."
              />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Agira Cricket league 2024</div>
              <div className="portfolio-caption-subheading text-muted">
               15 teams only
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 2*/}
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal2"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                className="img-fluid"
                src={cric1}
                alt="..."
              />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">CCL</div>
              <div className="portfolio-caption-subheading text-muted">
             t20 match
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 3*/}
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal3"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                className="img-fluid"
                src={cric2}
                alt="..."
              />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">IPL</div>
              <div className="portfolio-caption-subheading text-muted">
                8 teams only
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          {/* Portfolio item 4*/}
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal4"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                className="img-fluid"
                src={cric3}
                alt="..."
              />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Lines</div>
              <div className="portfolio-caption-subheading text-muted">
                CCL
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          {/* Portfolio item 5*/}
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal5"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                className="img-fluid"
                src={cric6}
                alt="..."
              />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">T20</div>
              <div className="portfolio-caption-subheading text-muted">
               25 overs
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          {/* Portfolio item 6*/}
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal6"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x" />
                </div>
              </div>
              <img
                className="img-fluid"
                src={cric5}
                alt="..."
              />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Window</div>
              <div className="portfolio-caption-subheading text-muted">
                BBL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About*/}
  <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About</h2>
        <h3 className="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src={about1}
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>2009-2011</h4>
              <h4 className="subheading">Our Humble Beginnings</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src={about2}
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>March 2011</h4>
              <h4 className="subheading">An Agency is Born</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src={about3}
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>December 2015</h4>
              <h4 className="subheading">Transition to Full Service</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <img
              className="rounded-circle img-fluid"
              src={about4}
              alt="..."
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>July 2020</h4>
              <h4 className="subheading">Phase Two Expansion</h4>
            </div>
            <div className="timeline-body">
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
  {/* Clients*/}
  <div className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/microsoft.svg"
              alt="..."
              aria-label="Microsoft Logo"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/google.svg"
              alt="..."
              aria-label="Google Logo"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/facebook.svg"
              alt="..."
              aria-label="Facebook Logo"
            />
          </a>
        </div>
        <div className="col-md-3 col-sm-6 my-3">
          <a href="#!">
            <img
              className="img-fluid img-brand d-block mx-auto"
              src="assets/img/logos/ibm.svg"
              alt="..."
              aria-label="IBM Logo"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Contact*/}
 
  {/* Footer*/}
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-start">
          Copyright © Your Website 2023
        </div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            className="btn btn-dark btn-social mx-2"
            href="#!"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
        <div className="col-lg-4 text-lg-end">
          <a className="link-dark text-decoration-none me-3" href="#!">
            Privacy Policy
          </a>
          <a className="link-dark text-decoration-none" href="#!">
            Terms of Use
          </a>
        </div>
      </div>
    </div>
  </footer>
  {/* Portfolio Modals*/}
  {/* Portfolio item 1 modal popup*/}
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal1"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/1.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Threads
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Illustration
                  </li>
                </ul>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 2 modal popup*/}
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal2"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/2.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Explore
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Graphic Design
                  </li>
                </ul>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 3 modal popup*/}
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal3"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/3.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Finish
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Identity
                  </li>
                </ul>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 4 modal popup*/}
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal4"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/4.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Lines
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Branding
                  </li>
                </ul>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 5 modal popup*/}
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal5"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/5.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Southwest
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Website Design
                  </li>
                </ul>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio item 6 modal popup*/}
  <div
    className="portfolio-modal modal fade"
    id="portfolioModal6"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="close-modal" data-bs-dismiss="modal">
          <img src="assets/img/close-icon.svg" alt="Close modal" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                {/* Project details*/}
                <h2 className="text-uppercase">Project Name</h2>
                <p className="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/6.jpg"
                  alt="..."
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-inline">
                  <li>
                    <strong>Client:</strong>
                    Window
                  </li>
                  <li>
                    <strong>Category:</strong>
                    Photography
                  </li>
                </ul>
                <button
                  className="btn btn-primary btn-xl text-uppercase"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  <i className="fas fa-xmark me-1" />
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

       

    </div>

    </>
  );
}

