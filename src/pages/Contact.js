import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="about-container">
        <h2>Contact</h2>
        <div className="contact-methods">
          <p>
            Email:{" "}
            <a href="mailto:delasllagas.shandaramae@gmail.com">
              delasllagas.shandaramae@gmail.com
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/shndrdll"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/shndrdll
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shanpdll/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/shanpdll
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
