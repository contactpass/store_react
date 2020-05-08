import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "light" }}
              to="/login"
              className="nav-link"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "light" }}
              to="/register"
              className="nav-link"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
