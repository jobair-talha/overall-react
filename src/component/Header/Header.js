import React from "react";
import Logo from "../../images/tsoft.png";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__image">
          <img className="header__img" src={Logo} alt="" />
        </div>
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Header;
