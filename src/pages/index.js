import React from 'react';
import "./styles/index.css";
//import GameOfLifeAnimation from './vortex.js';
import Animation from './vortex.js';
const Index = () => {

  const handleNavigation = (section) => {
    document.getElementById(section).scrollIntoView({behavior: 'smooth'});
  }

  const handleOpenResume = () => {
    window.open('assets/resume.pdf');
  }

  return (
    <div>
      {/*<header className="main-header " role="header">
        <div className="logo">
          <a onClick={() => handleNavigation('top')}><em>./</em></a>
        </div>
        <nav id="menu" className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="#section1">Home</a></li>
            <li><a href="#section3">About Me</a></li>
            <li><a href="#section6">Contact</a></li>
            <li><a onClick={handleOpenResume}>Resume</a></li>
          </ul>
        </nav>
      </header> */}

      <section className="section main-banner" id="top" data-section="section1">
      <div id="bg-video" style={{width: '100vw', height: '100vh'}}>
        <Animation />
    </div>
    <div id="title"></div>
        <div className="video-overlay header-text">
            <div className="caption">
            <h1  style={{ color: 'orange' }}>Bradlee Harrison</h1>
                <h6>Electrical and Computer Engineering</h6>
                <div className="main-button">
                    <a href="/home">See more</a>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
