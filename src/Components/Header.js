import React from "react";

export const Header = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <a href="index.html">
            <h1 width="125px">FEISAL</h1>
          </a>
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
