import React from "react";

const Home = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-left">
          <span className="badge">Hello, I’m Shandara Mae De Las Llagas!</span>
          <h1>
            3rd-Year Computer Science Student <br />
            <span className="highlight">at Pamantasan ng Cabuyao</span>
          </h1>
          <p>
            Currently exploring frontend development with <strong>React</strong> and backend development with <strong>Laravel</strong>.  
            I enjoy building projects that challenge me, learning new technologies, and improving my skills every day.
          </p>
        </div>
        <div className="hero-blob">
          <img src="/pic2-removebg-preview.png" alt="Shan Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
