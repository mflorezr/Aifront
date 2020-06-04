import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <Link to="/">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <img src="public/../../Logo.png" width="80" height="80" alt="" />
          </a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/">
            <a className="navbar-brand" href="#">
              AI Value
            </a>
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        </div>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
