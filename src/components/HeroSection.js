import React, { useEffect, useState } from 'react';
import KUTE from 'kute.js';
import './HeroSection.css';

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false); // State for the mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Blob animation using KUTE.js
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // Optional: Remove when out of view
        }
      });
    });

    const textElements = document.querySelectorAll('.hidden');
    textElements.forEach((el) => observer.observe(el));

    // Cleanup observer when the component is unmounted
    return () => {
      textElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="hero-section">
      {/* Navigation Header */}
      <header className="hero-header">
        <div className="logo">MasonWilson_.</div>
        <nav className="nav-bar">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/* Mobile Hamburger Menu */}
        <div className="mobile-nav" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </div>
        {menuOpen && (
  <div className="mobile-menu">
    <div className="mobile-menu-header">
      <div className="logo">MasonWilson._</div>
      <div className="close-icon" onClick={toggleMenu}>✖</div>
    </div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
)}
      </header>

      {/* Hero Content */}
      <div className="hero-content">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(462.7557721583231 271.8081706288891)">
            <path
              id="blob1"
              d="M145 -142.9C172.2 -117.9 167.6 -58.9 167.5 -0.1C167.4 58.7 171.7 117.4 144.5 163.2C117.4 209 58.7 242 8.5 233.5C-41.7 225.1 -83.4 175.1 -114.4 129.3C-145.4 83.4 -165.7 41.7 -180.2 -14.5C-194.7 -70.7 -203.4 -141.4 -172.4 -166.4C-141.4 -191.4 -70.7 -170.7 -5.9 -164.8C58.9 -158.9 117.9 -167.9 145 -142.9"
              fill="#120f6d"
            ></path>
          </g>
          <g transform="translate(487.1809101508816 318.0962027427099)">
            <path
              id="blob2"
              d="M135.8 -160.8C160.8 -110.8 155.4 -55.4 146.3 -9.1C137.2 37.2 124.5 74.5 99.5 117C74.5 159.5 37.2 207.2 -7.8 215C-52.8 222.8 -105.6 190.6 -149.9 148.1C-194.3 105.6 -230.1 52.8 -228.2 1.9C-226.4 -49 -186.7 -98.1 -142.4 -148.1C-98.1 -198.1 -49 -249 3.2 -252.2C55.4 -255.4 110.8 -210.8 135.8 -160.8"
              fill="#120f6d"
            ></path>
          </g>
        </svg>
        <h1 className="hero-title hidden">MASON WILSON</h1>
        <p className="hero-subtitle hidden">Aspiring Software Developer | Front-End Development</p>
      </div>

      {/* Featured Section */}
      <div className="featured">
        <p className="hidden">Highlights</p>
        <div className="featured-logos">
  <i className="fab fa-react" title="React"></i>
  <i className="fab fa-js-square" title="JavaScript"></i>
  <i className="fab fa-html5" title="HTML5"></i>
  <i className="fas fa-code" title="APIs"></i>
</div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>⬇⬇ </span>
      </div>
    </div>
  );
}

export default HeroSection;
