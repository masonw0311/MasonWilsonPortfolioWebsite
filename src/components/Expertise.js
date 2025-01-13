import React, { useEffect } from 'react';
import './Expertise.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function Expertise() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        const cards = document.querySelectorAll('.expertise-card');
        cards.forEach((card) => observer.observe(card));
    
        return () => {
          cards.forEach((card) => observer.unobserve(card));
        };
      }, []);
  return (
    <section id="skills" className="expertise-section">
        <div class="custom-shape-divider-top-1736206826">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <div className='curve'></div>
      <h2 className="expertise-title">Skills</h2>
      <div className="expertise-cards">
        <div className="expertise-card">
        <div className="icon material-icons">computer</div>
          <h3>
            <span className="highlight-pink">Software</span> Development
          </h3>
          <p>
            Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript.
          </p>
        </div>
        <div className="expertise-card">
  <div className="icon">
    <FontAwesomeIcon icon={faReact} />
  </div>
  <h3>
    <span className="highlight-blue">Frontend Dev</span> React, NextJS
  </h3>
  <p>
    Passionate about UI/UX. Proficient in HTML, CSS, JS, React, and NextJS frameworks.
  </p>
</div>
<div className="expertise-card">
          <div className="icon">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <h3>
            <span className="highlight-orange">Backend Dev</span> Django, SQL
          </h3>
          <p>
            Skilled in building robust backend applications with Django and efficient database management using SQL.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
