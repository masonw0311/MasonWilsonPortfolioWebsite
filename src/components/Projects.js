import React, { useEffect } from 'react';
import './projects.css';

function Projects() {
  useEffect(() => {
    // Create IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Add 'show' class when visible
          } else {
            entry.target.classList.remove('show'); // Optional: Remove when out of view
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Target all elements with the 'hidden' class
    const textElements = document.querySelectorAll('.hidden');
    textElements.forEach((el) => observer.observe(el));

    // Cleanup observer when component is unmounted
    return () => {
      textElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section id="projects" className="projects-section">
    <div className="projects-intro">
  <div className="intro-text">
    <h1>About Me</h1>
    <p>
      I am a Software Engineer with a passion for building impactful solutions
      and fostering connections through technology. With experience in Python,
      JavaScript, React, MySQL and Django, I’ve developed projects ranging from
      machine learning models to full-stack web applications that promote
      inclusivity and efficiency.
    </p>
    <p>
      As a former collegiate baseball captain, I bring leadership, teamwork,
      and adaptability to every project, blending technical expertise with a
      commitment to delivering meaningful user experiences.
    </p>
  </div>
  <div className='animation-placeholder'>
  <div className="cube">
    {/* Replace with your image/animation */}
   <div className='face infront'> </div>
   <div className='face inback'> </div>
   <div className='face inright'> </div>
   <div className='face inleft'> </div>
   <div className='face intop'> </div>
   <div className='face inbottom'> </div>
  </div>
  </div>
</div>

    <h2 className="projects-title">Projects</h2>
<div class="projects-grid">

<div class="large-card">
  <div class="card-inner">
   
    <div class="front">
    <svg
        id="logo-70"
        width="150"
        height="150"
        viewBox="0 0 78 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
          fill="#394149"
        />
        <path
          d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
          fill="#394149"
        />
      </svg>
      <div class="large-card-text">
        <h3>CrossCulturalConnect</h3>
        <p>Web Application</p>
      </div>
    </div>
   
    <div class="back">
  <h3>Cross Cultural Connect</h3>
  <p>
    A dynamic platform built with Django (backend) and React.js (frontend), leveraging APIs for real-time translation and seamless functionality.
  </p>
  <ul>
    <li>Community message board for sharing resources</li>
    <li>Real-time translator for bridging language gaps</li>
    <li>Search and filter functionality for businesses</li>
    <li>Inclusive and accessible design</li>
  </ul>
  <a href="https://github.com/masonw0311/cross_cultural_connect/tree/main" target="_blank" class="github-link">
    View on GitHub
  </a>
</div>

  </div>
</div>



 
<div class="small-card-container">
  <div class="small-card ">
    <div class="card-inner">
      <div class="front">
        <img src="./pitchdata.png" alt="Project" />
        <div class="small-card-text">
          <h3>Baseball Pitch Analyzer</h3>
          <p>Machine Learning</p>
        </div>
      </div>
      <div class="back">
  <h3>Baseball Pitch Analyzer</h3>
  <p>
  Developed a machine learning model to predict baseball pitch types using
Python, Pandas, Scikit-learn, and Seaborn, following the software
development life cycle (SDLC). Integrated web technologies, including Flask
and Matplotlib, to create an interactive data visualization dashboard.
  </p>
  <a href="https://github.com/masonw0311/baseball-pitch-prediction" target="_blank" class="github-link">
    View on GitHub
  </a>
</div>
    </div>
  </div>

  <div class="small-card 2">
    <div class="card-inner">
      <div class="front">
        <img src="./LakeVirginiaProject.png" alt="Project" />
        <div class="small-card-text">
          <h3>Lake Virginia </h3>
          <p>Web Development</p>
        </div>
      </div>
      <div class="back">
      <h3>Lake Virginia Website</h3>
      <p>
      This project for the Fresh Water Alliance in Winter Park, FL focused on developing an interactive website to highlight the significance of Lake Virginia. The site was designed using HTML, CSS, and JavaScript, with Tailwind CSS for responsive and modern styling. Interactive features, such as hover effects and live weather updates powered by the OpenWeather API. Version control was managed through Git and GitHub, ensuring a streamlined workflow and efficient teamwork.
      </p>
      <a href="https://github.com/masonw0311/Lake-Virginia-Website" target="_blank" class="github-link">
    View on GitHub
  </a>
    </div>
    </div>
  </div>
</div>
</div>
  </section>
  
  );
}
export default Projects;
