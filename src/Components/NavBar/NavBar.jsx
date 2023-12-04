import React from "react";
import "./Style.css";
import ReactStars from "react-stars";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <span style={{ color: "white" }}>You</span>
        <span style={{ color: "red" }}>video.</span>
      </div>
      <ReactStars className="stars"/>
      <ul>
        <li>Demos</li>
        <li>Movies</li>
        <li>Shows</li>
        <li>Premium</li>
        <li>Pages</li>
        <li>Admin</li>
        <li>Contact Us</li>
        <li>
          {" "}
          <button>Login</button>{" "}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
