import React from "react";
import './Nav.css'

const Nav = () => {
  return (
    <div className ="nav">
      <ul className = "nav__items">
        <li className = "nav__item">
          <a className = "nav__link" href="/home" rel="noopener noreferrer">Home</a>
        </li>
        <li className = "nav__item">
          <a className = "nav__link" href="http://www.google.com" rel="noopener noreferrer">About</a>
        </li>
        <li className = "nav__item">
          <a className = "nav__link" href="/home" rel="noopener noreferrer">Team</a>
        </li>
        <li className = "nav__item">
          <a className = "nav__link" href="/home" rel="noopener noreferrer">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
