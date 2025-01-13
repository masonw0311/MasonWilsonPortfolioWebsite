import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Left Column */}
      <div className="contact-left">
        <h1>Available for select freelance opportunities</h1>
        <p>
          Have an exciting project you need help with? Send me an email or
          contact me via instant message!
        </p>
        <a href="mailto:masonw0311@gmail.com">masonw0311@gmail.com</a>
        <ul>
  <li>
    <a href="https://www.linkedin.com/in/mason-wilson-b8abbb270/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/mason.w11/" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
  </li>
  <li>
    <a href="https://github.com/masonw0311" target="_blank" rel="noopener noreferrer">
      Github
    </a>
  </li>
</ul>

      </div>

      {/* Middle Column */}
      <div className="contact-middle">
        <div className="testimonial-card">
          <div className="quote-icon">“</div>
          <p>
            Mason quickly absorbed a wide range of topics, from network
            engineering and IP management to software development and
            infrastructure. His ability to grasp complex concepts and apply them
            effectively was impressive.
          </p>
          <p>
            Mason played a pivotal role in developing a chatbot for our IP team,
            significantly enhancing our productivity by saving considerable time
            and effort.
          </p>
          <div className="author">Chris Guerrero</div>
          <div className="author-role">
            Manager, Network Engineering @ Spectrum Enterprise
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="contact-right">
        {/* Top Section */}
        <div className="top">
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p>
              Mason’s ability to troubleshoot and diagnose complex technical
              challenges is exceptional. His efforts directly contributed to the
              success of multiple critical projects.
            </p>
            <div className="author">Jane Doe</div>
            <div className="author-role">Senior Engineer @ TechCorp</div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="bottom">
          <div className="testimonial-card">
            <div className="quote-icon">“</div>
            <p>
              Mason demonstrates an unmatched passion for excellence in every
              task he undertakes, making him a highly valued team member.
            </p>
            <div className="author">John Smith</div>
            <div className="author-role">Team Lead @ InnovateTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
