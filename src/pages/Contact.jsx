import React from "react";
import "./Contact.css";
import resume from "../assets/cvv.pdf";
export default function Contact() {
  return (
    <>
      <section className="contact-intro">
        <div>
          <h2 className="contact-title">Let’s Build Something Together</h2>
          <p className="contact-description">
            I’d love to hear from you! Whether you’re reaching out about a
            project, a job opportunity, or just want to say hi, feel free to
            drop a message. I check my inbox regularly and always try to respond
            within a day or two.
          </p>
        </div>
      </section>

      <section className="contact-details">
        <div className="contact-wrapper">
          <div className="contact-column">
            <h2 className="contact-subtitle">Direct Contact Details</h2>
            <nav className="contact-info">
              <p>
                Email:{" "}
                <a href="mailto:dragutumaria6@gmail.com">
                  dragutumaria6@gmail.com
                </a>
              </p>
              <p>
                GitHub: <a href="https://github.com/elisadev">Drg6MariaE</a>
              </p>
              <p>
                Resume:{" "}
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  {" "}
                  PDF
                </a>
              </p>
            </nav>
          </div>
          <div className="contact-column">
            <p className="availability-note">
              PS: I’m currently open to internships, freelance work, or just
              making cool stuff with cool people.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
