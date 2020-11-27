import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="containerHeader">
      <div className="logo">
        <p className="logoText">eatrel<span className='logoDot'>.</span></p>
      </div>
      <div className="containerMenu">
        <p className="menu">View on Map</p>
        <p className="menu">My brands</p>
        <p className="menu">Active Offers</p>
        <p className="menu">Sign Out</p>
      </div>
    </div>
  );
};


export default Header;