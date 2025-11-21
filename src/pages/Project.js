import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="about-container">
        <h2>Project</h2>

        
        {/* Java Swing To-Do List App */}
        <div className="project-card">
          <h3 className="todo-list-app">Java To-Do List App (Swing GUI)</h3>
          <p>
            A simple desktop-based To-Do List application built using Java Swing. This beginner-friendly project allows users to manage their daily tasks easily.
          </p>
          <a
            href="https://github.com/shndrdll/ToDoListApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
         {/* FreshMart E-Commerce App */}
        <div className="project-card">
          <h3 className="freshmart-app">FreshMart – Fruits and Vegetables E-Commerce App</h3>
          <p>
            FreshMart is an e-commerce web application focused on providing users 
            with a seamless way to browse, select, and purchase fresh fruits and vegetables online. 
            
          </p>
          <a href="https://github.com/knownAsWillz/E-Commerece_AppDev" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>


      </div>
    </section>
  );
};

export default Portfolio;
