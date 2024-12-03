import React, { useEffect } from 'react';
import "../Navbar/Navbar.css";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      const scrollHeight = window.scrollY;
      const pageHeight = document.body.offsetHeight;
      const triggerHeight = pageHeight * 0.01;

      if (navbar) {
        if (scrollHeight > triggerHeight) {
          navbar.style.position = 'fixed';
          navbar.style.top = '0';
          navbar.style.left = '0';
          navbar.style.zIndex = '1000';
          navbar.style.width = '100%';
        } else {
          navbar.style.position = 'relative';
        }
      }
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className="navbar">
      <a href="#about">About</a>
      <a href="#courses">Courses & Fees</a>
      <a href="#admission">Admission</a>
      <div className="dropdown">
        <button className="dropbtn">
          Cutoff
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#gen">General</a>
          <a href="#obc">OBC</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">
          Placement
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="#2023">2023</a>
          <a href="#2024">2024</a>
        </div>
      </div>
      <a href="#ranking">Ranking</a>
      <a href="#scholarship">Scholarship</a>
      <a href="#campus">Campus</a>
      <a href="#alumni-network">Alumni</a>
      <a href="#faq">FAQ</a>
    </div>
  );
}

export default Navbar;
