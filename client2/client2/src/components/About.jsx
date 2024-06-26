import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/about-image.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-intro">
        <h1>About Streamfy</h1>
        <p>
          Welcome to <strong>Streamfy</strong> - your gateway to easy learning and premium entertainment. Developed as the final project for cohort 15 students of ALX SE, Streamfy combines a vast library of educational videos with top-tier entertainment, all within a user-friendly platform.
        </p>
        <img src={aboutImage} alt="Streamfy interface showing educational content" className="about-image" />
      </div>

      <div className="about-features">
        <h2>Key Features</h2>
        <ul>
          <li>Extensive library of educational and entertainment videos.</li>
          <li>Intuitive navigation for an enhanced user experience.</li>
          <li>Personalized content recommendations.</li>
          <li>High-definition streaming with adaptive bitrate.</li>
          <li>Multi-device compatibility and seamless integration.</li>
        </ul>
      </div>

      <div className="about-story">
        <h2>Development Story</h2>
        <p>
          Streamfy was conceptualized and developed over several months as part of the final project for the cohort 15 students at ALX SE. The project aimed to integrate various technical skills acquired during the course to deliver a comprehensive and engaging video streaming platform. From initial design to deployment, the development process involved collaborative efforts, innovation, and rigorous testing to ensure a high-quality user experience.
        </p>
      </div>

      <div className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-group">
          <h3>Backend Engineers:</h3>
          <ul>
            <li>Nigel Zenda</li>
            <li>Hezekiah Mokwenyei</li>
          </ul>
        </div>
        <div className="team-group">
          <h3>Frontend Engineers:</h3>
          <ul>
            <li>Umi Siguca</li>
            <li>Kelechukwu Favour</li>
          </ul>
        </div>
        <p>
          Streamfy is the result of the hard work and dedication of the talented students in cohort 15 at ALX SE. Each member contributed their unique skills to bring this project to fruition, from front-end development and user interface design to back-end integration and quality assurance. We are grateful for the support from our mentors and peers throughout this journey.
        </p>
      </div>
    </div>
  );
}

export default About;


