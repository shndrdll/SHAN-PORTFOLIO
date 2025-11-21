import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", !darkMode);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container nav-container">
        <h1 className="logo">Shan<span>.</span></h1>

        {/* Desktop + Mobile Menu */}
        <nav className={`desktop-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#portfolio" className="nav-link">Project</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* Light/Dark Toggle */}
        <button className="btn primary-btn" onClick={handleToggle}>
          {darkMode ? "Light" : "Dark"}
        </button>

        {/* Hamburger for Mobile */}
        <button className="btn primary-btn hamburger" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
