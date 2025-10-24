import React from 'react';
import "./Projects.css";
import firstprojectImg from "../assets/firstproject.png";
import savImg from "../assets/sav.png";

export default function Projects() {
  return (
  <>
    <section>
      <section className="projects-intro">
        <div>
          <p className="intro-text">
            Welcome to the part of my portfolio where ideas turn into code!
            Here, you’ll find a collection of projects that showcase my journey
            as a front-end developer — from responsive layouts and interactive
            components to hands-on use of React, APIs, and modern web tools.
          </p>
        </div>
      </section>

      <section className="project-section">
        <div className="project-flex">
          <div className="project-image">
            <img src={firstprojectImg} alt="Savora homepage screenshot" />
          </div>
          <div className="project-description">
            <h2>
              <a href="https://quiet-pudding-37693d.netlify.app" className='linkcolor'>
                Savora – Fine Dining Restaurant
              </a>
            </h2>
            <p> 
              Savora is a fully custom restaurant website designed to deliver a
              luxurious and inviting online presence for a high-end dining
              experience. This project demonstrates my ability to build a
              complete website from scratch, featuring multiple pages, custom
              styling, smooth navigation, and a consistent brand identity.
            </p>
            <h2>
            <a href="https://github.com/Drg6MariaE/SAVORA" className='github'>
                (GitHub: View Code)
              </a>
            </h2>
          </div>
        </div>

        <div className="project-details">
          <div className="project-highlights">
            <h3>Project Highlights:</h3>
            <ul>
              <li>
                <strong>Multi-Page Structure:</strong> Home, Menu, Gallery,
                Events, and Contact pages for complete site navigation.
              </li>
              <li>
                <strong>Custom Visuals:</strong> Unique logo and imagery for a
                cohesive, branded look.
              </li>
              <li>
                <strong>Responsive Design:</strong> Optimized for both desktop
                and mobile devices.
              </li>
              <li>
                <strong>Modern UI:</strong> Elegant color palette, smooth hover
                effects, and easy-to-use navigation.
              </li>
              <li>
                <strong>Accessibility:</strong> Semantic HTML and meaningful alt
                text for better usability.
              </li>
              <li>
                <strong>Interactivity:</strong> JavaScript enhancements for
                improved user experience.
              </li>
              <li>
                <strong>Clean, Maintainable Code:</strong> Organized HTML, CSS
                variables, and external scripts.
              </li>
            </ul>
            <div className='technolog'>
            <h3>Technologies Used:</h3>
            <ul className="tech-used">
              <li>
                <strong>HTML5</strong>
              </li>
              <li>
                <strong>CSS3 (including CSS variables and transitions)</strong>
              </li>
              <li>
                <strong>JavaScript</strong>
              </li>
              <li>
                <strong>Image optimization & basic accessibility</strong>
              </li>
            </ul>
            </div>
          </div>
          <div className="project-screenshot">
            <img src={savImg} alt="Savora screenshot" />
          </div>
        </div>
      </section>

      <p className="portfolio-footer">
        Not only does this portfolio showcase my best work, but it is itself a
        fully custom project, designed and coded from scratch using React and
        modern CSS. Here, you’ll find a collection of projects that highlight my
        journey as a front-end developer — from responsive layouts and
        interactive components to hands-on use of React, APIs, and web tools.
      </p>
    </section>
  </>
  );
}
