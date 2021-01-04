import React from 'react';
// import "./connect.scss";
import "../../style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import connect1 from "../../assets/connect1.png";
import connect2 from "../../assets/connect2.png";
import connect3 from "../../assets/connect3.png";
import connect4 from "../../assets/connect4.png";


function Connect() {
  return (
    <Router >
      <section className="connect">
        {/* <div className="container"> */}
        <h2 className="connect__title">For kids who enjoy themeselves</h2>
        <p className="connect__notice">Connect with us <span>@playground</span></p>
        <ul className="connect__list">
          <li className="connect__item">
            <img src={connect1} alt="partner1" className="connect__image"/>
          </li>
          <li className="connect__item">
            <img src={connect2} alt="partner2" className="connect__image"/>
          </li>
          <li className="connect__item">
            <img src={connect3} alt="partner3" className="connect__image"/>
          </li>
          <li className="connect__item">
            <img src={connect4} alt="partner4" className="connect__image"/>
          </li>
        </ul>
        {/* </div> */}
      </section>
    </Router>
    
  )
}

export default Connect;

