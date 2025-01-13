import React, { useEffect } from "react";
import "./Experience.css";

function Experience() {
  // Toggle card logic for collapsing and expanding
  const toggleCard = (index) => {
    const card = document.getElementById(`experience-card-${index}`);
    const content = card.querySelector(".card-body");
    const isExpanded = content.style.maxHeight;

    if (isExpanded) {
      content.style.maxHeight = null; // Collapse
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Expand
    }
  };

  // Scroll animations using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // Optional: Remove when out of view
        }
      });
    });

    // Observe elements with the "hidden" class
    const elementsToAnimate = document.querySelectorAll(".hidden");
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Decorative SVG Shape */}
        <div className="custom-shape-divider-top-1736305022">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <h2 className="experience-title hidden">Professional Experience</h2>

        {/* Experience Card 1 */}
        <div id="experience-card-0" className="experience-card hidden">
          <div className="card-header" onClick={() => toggleCard(0)}>
            <h3>Intern Software Developer @ Spectrum Enterprise</h3>
            <span>May 2024 - Aug 2024</span>
          </div>
          <div className="card-body">
            <p>
              Designed software solutions as a Software Development Intern at
              Spectrum Enterprise during the summer of 2024, leveraging Python,
              SQL, and data analysis to deliver results. Utilized large datasets
              to derive insights, collaborated with a team to optimize services
              for clients, and automated internal processes to enhance
              operational efficiency.
            </p>
            <h2>Highlights</h2>
            <p>
              - Designed and implemented an IDE extension using VSCode and
              Secure Tokens, streamlining workflows and reducing development
              time by 7-10%.
            </p>
            <p>
              - Improved IP management forecasting by creating Python-based
              scripts, boosting team productivity by 10-15%.
            </p>
            <div className="card-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>JavaScript</span>
              <span>Jira</span>
            </div>
          </div>
        </div>

        {/* Experience Card 2 */}
        <div id="experience-card-1" className="experience-card hidden">
          <div className="card-header" onClick={() => toggleCard(1)}>
            <h3>Full Stack Developer @ CrossCulturalConnect</h3>
            <span>2023 - Present</span>
          </div>
          <div className="card-body">
            <p>
              As part of a winning team in the{" "}
              <strong>Ideas for Good Pitch Competition</strong> at Rollins
              College in November 2023, we secured{" "}
              <strong>$1,500 in seed funding</strong> by presenting a compelling
              project proposal for <em>Cross Cultural Connect</em>. This platform
              empowers immigrants in the Orlando area by connecting them with
              local businesses, services, and community members.
            </p>
            <p>
              Our pitch stood out due to a comprehensive business plan focused on
              social good, extensive market research, and iterative refinement.
              Since winning, our team has transitioned from planning to
              development, leveraging technologies like{" "}
              <strong>Django (backend)</strong> and{" "}
              <strong>React.js with Material-UI (frontend)</strong> to build the
              application.
            </p>
            <p>
              <strong>Highlights of the platform include:</strong>
            </p>
            <ul>
              <li>
                A <strong>community message board</strong> for sharing resources
                and support.
              </li>
              <li>
                A <strong>real-time translator tool</strong> to bridge language
                gaps.
              </li>
              <li>
                <strong>Search and filter functionality</strong> for
                immigrant-owned businesses.
              </li>
            </ul>
            <p>
              We are currently in the testing phase and finalizing the beta
              release of the web application. This project has been a testament
              to our team's commitment to fostering inclusivity and creating
              meaningful connections through technology.
            </p>
            <div className="card-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Django</span>
              <span>Python</span>
              <span>SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
