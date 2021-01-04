import React from 'react';
// import "./subscribe.scss";
import "../../style.scss";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function Subscribe() {
  return (
    <Router >
      <section className="subscribe">
        <div className="subscribe__container">
          <h2 className="subscribe__title">Subscribe to our newsletter to get future offers</h2>
          <div className="subscribe__info">
            <div className="subscribe__form">
              <input type="text" placeholder="Enter your email" className="subscribe__input" />
              <button className="subscribe__button">Subscribe</button>
            </div>
            <div className="subscribe__social">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </section>
    </Router>
  );
}

export default Subscribe;
