import React from "react";
import "./Home.css";
import image from "../assets/me.png";
import image1 from "../assets/1.jpeg";
import image2 from "../assets/2.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home__hero">
        <div className="intro">
          <h1 className="home__title">Hi, I'm Maria Dragutu</h1>
          <p className="home__subtitle">
            I’m a passionate web developer, dedicated to growing my skills and
            reaching my full potential. In this portfolio, you’ll find a
            selection of projects that showcase my creativity, dedication, and
            technical abilities.
          </p>
          <button className="home__btn">
            <Link to="/projects">See my work</Link>
          </button>
        </div>
        <div className="imageintro">
          <img src={image} alt="Portrait of Maria Dragutu" className="me" />
        </div>
      </section>
      <section className="showcase">
        <div className="showcaseintro">
          <h2 className="showcasetitle">A Glimpse Into My Work</h2>
          <div className="space">
            <div className="showcase1">
              <img src={image1} alt="Design 1" className="img1" />
              <p>
                This is a Figma-based design concept for a coffee shop website,
                showcasing my skills in layout planning, visual hierarchy, and
                user-centered design.
              </p>
            </div>
          </div>
          <div className="showcase1">
            <p>
              {" "}
              This project is part of my personal portfolio and represents a key
              step in my development journey. It not only demonstrates my
              ability to translate design mockups into fully responsive,
              real-world web interfaces, but also showcases my evolving skills
              in layout design, user experience, and front-end technologies.
            </p>

            <img src={image2} alt="Design 2" className="img2" />
          </div>
        </div>
      </section>
      <section className="aboutme" id="about">
        <div>
          <h1 className="abtitle">ABOUT ME</h1>
          <p>
            I’m a self-taught web developer with a passion for building clean,
            responsive websites. I love turning ideas into interactive,
            user-friendly web experiences.<br></br>
            <br></br>
            To grow my skills, I completed the{" "}
            <strong>Meta Front-End Developer</strong> and{" "}
            <strong>IBM Web Development</strong> courses on{" "}
            <strong>Coursera</strong>. These programs gave me hands-on
            experience with <strong>HTML, CSS, JavaScript, React, Git,</strong>{" "}
            and <strong>responsive design—all</strong> focused on front-end
            development.<br></br>
            <br></br>
            As a <strong>wheelchair user</strong>, I haven’t had the opportunity
            to pursue a traditional degree—but what I do have is genuine{" "}
            <strong>passion, persistence</strong>, and a deep commitment to
            building something meaningful with my life. I’ve worked hard to
            teach myself these skills because I want to create a better future.
            <br></br>
            <br></br>
            This portfolio, built with <strong>React</strong>, is part of that
            journey. I’m currently looking for{" "}
            <strong>junior front-end roles</strong> or{" "}
            <strong>internships</strong>, where I can keep learning, grow as a
            developer, and contribute to real-world projects that make a
            difference.
          </p>
        </div>
      </section>
    </>
  );
}
