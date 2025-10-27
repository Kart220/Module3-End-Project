import React from 'react'
import { Link } from 'react-router-dom'
import './styles/About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header text-center">
          <h1 className="about-title">About This Application</h1>
          <p className="about-subtitle">Modern React Development with Vite</p>
        </div>
        
        <div className="about-content">
          <div className="about-grid">
            <div className="about-card">
              <h2>🚀 Built with Vite</h2>
              <p>
                This application leverages Vite, the next-generation frontend tooling that provides 
                lightning-fast development server start and optimized builds for production.
              </p>
            </div>
            
            <div className="about-card">
              <h2>🎯 Purpose</h2>
              <p>
                Demonstrate modern React development practices including routing, component composition, 
                state management, and responsive design principles.
              </p>
            </div>
            
            <div className="about-card">
              <h2>🛠 Technologies</h2>
              <ul className="tech-stack">
                <li>React 18 + Hooks</li>
                <li>React Router DOM v6</li>
                <li>Vite Build Tool</li>
                <li>Modern CSS3</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="about-card">
              <h2>⭐ Features</h2>
              <ul className="features-list">
                <li>Multi-page routing with dynamic parameters</li>
                <li>Active navigation highlighting</li>
                <li>Responsive mobile-first design</li>
                <li>Clean component architecture</li>
                <li>Modern UI/UX patterns</li>
              </ul>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Pages</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Components</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Responsive</div>
            </div>
          </div>
        </div>
        
        <div className="about-actions text-center">
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About