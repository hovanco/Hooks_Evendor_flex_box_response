import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import "./header.scss";
import "../../style.scss";

function Header() {
  return (
    <Router>
        <header className="header__inner">
          <Link to="" className="logo">
            <span className="logo__text">Play</span>ground
          </Link>
          <nav className="header__menu">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <Link to="" className="header__menu-link">Events</Link>
              </li>
              <li className="header__menu-item">
                <Link to="" className="header__menu-link">Pricing</Link>
              </li>
              <li className="header__menu-item">
                <Link to="" className="header__menu-link">Blog</Link>
              </li>
              <li className="header__menu-item">
                <Link to="" className="header__menu-link header__login btn btn--border btn--rounded">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
    </Router>
  );
}

export default Header;

