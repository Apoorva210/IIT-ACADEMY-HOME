import React from 'react';
import "../Header/Header.css";

function Header() {
  return (
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/800px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" alt="IIT Delhi Logo" />
      <div className="title-container">
        <h3>IIT Delhi: Admission 2024, Cutoff, Courses,</h3>
        <h3>Fees, Placement, Ranking</h3>
        <div className="subtext">New Delhi | Autonomous University | Estd 2008</div>
      </div>
      <div className="rating">
        4.2 ★
      </div>
    </header>
  );
}

export default Header;
