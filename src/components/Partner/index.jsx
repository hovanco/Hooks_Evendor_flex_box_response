import React from 'react';
// import "./partner.scss";
import "../../style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo_amazon from "../../assets/logo-amazon.png";
import logo_netflix from "../../assets/logo-netflix.png";
import logo_newyork from "../../assets/logo-newyork.png";
import logo_stripe from "../../assets/logo-stripe.png";


function Partner() {
  return (
    <Router >
      <section className="partner">
        <div className="partner__container">
          <h2 className="partner__title">Our business partners</h2>
          <ul className="partner__list">
            <li className="partner__item">
              <img src={logo_amazon} alt="partner logo" className="partner__logo" />
            </li>
            <li className="partner__item">
              <img src={logo_netflix} alt="partner logo" className="partner__logo" />
            </li>
            <li className="partner__item">
              <img src={logo_newyork} alt="partner logo" className="partner__logo" />
            </li>
            <li className="partner__item">
              <img src={logo_stripe} alt="partner logo" className="partner__logo" />
            </li>
          </ul>
          
        </div>

      </section>
    </Router>
    
  )
}

export default Partner;

