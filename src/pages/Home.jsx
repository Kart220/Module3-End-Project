import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="home-hero">
          <div className="hero-content">
            <h1 className="home-title">
              Welcome to Our <span className="highlight">React App</span>
            </h1>
            <p className="home-description">
              Experience a modern multi-page React application showcasing advanced routing, 
              responsive design, and seamless user experience built with Vite.
            </p>
            <div className="home-features">
              <div className="feature-grid">
                <div className="feature-card">
                  <h3>Fast & Modern</h3>
                  <p>Built with Vite for lightning-fast development and builds</p>
                </div>
                <div className="feature-card">
                  <h3>Dynamic Routing</h3>
                  <p>Seamless navigation with React Router DOM</p>
                </div>
                <div className="feature-card">
                  <h3>Responsive</h3>
                  <p>Perfect experience on all devices</p>
                </div>
              </div>
            </div>
            <div className="home-actions">
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
              <Link to="/users" className="btn btn-secondary">
                Explore Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home