import React from 'react';
// import "./footer.scss";
import "../../style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Footer() {
  return (
    <Router >
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__item">
           <Link to="" className="logo"><span className="logo__text">Play</span>ground</Link>
          </div>
          <div className="footer__item">
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
        </div>
        <div className="footer__item">
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
        </div>
        <div className="footer__item">
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
        </div>
        <div className="footer__item">
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
          <Link to="" className="footer__link">Terms of services</Link>
        </div>
        </div>
        
      </footer>
    </Router>
    
  )
}

export default Footer;

