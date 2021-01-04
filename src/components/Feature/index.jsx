import React from 'react';
// import "./feature.scss";
import "../../style.scss";

import feature1 from "../../assets/feature1.png";
import feature2 from "../../assets/feature2.png";
import feature3 from "../../assets/feature3.png";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function Feature() {
  return (
    <Router>
    <section className="feature">
      {/* <div className="container"> */}
        <div className="feature__item">
          <div className="feature__image">
            <img src={feature1} alt="feature" className="" />
          </div>
          <div className="feature__info">
            <h3 className="feature__title">The outdoor enviroment is age-appropriate to paly</h3>
            <p className="feature__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt consequuntur eaque odit rerum, voluptatem pariatur et.
            Fugiat numquam hic, vitae eaque tempora aut eum doloremque quasi saepe laboriosam non minus.</p>
            <ul className="feature-intro__list">
              <li className="feature-intro__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="feature-intro__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
              <li className="feature-intro__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
            <Link to="" className="btn btn--primary btn--rounded">Visit Now </Link>
          </div>
        </div>
        <div className="feature__item">
          <div className="feature__image">
            <img src={feature2} alt="feature" className="" />
          </div>
          <div className="feature__info">
            <h3 className="feature__title">The best Aquapark for kids</h3>
            <p className="feature__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt consequuntur eaque odit rerum, voluptatem pariatur et.
            Fugiat numquam hic, vitae eaque tempora aut eum doloremque quasi saepe laboriosam non minus.</p>
            <ul className="feature-intro__list">
              <li className="feature-intro__item feature-intro__item--circle">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="feature-intro__item feature-intro__item--circle">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="feature-intro__item feature-intro__item--circle">
                Lorem ipsum dolor sit amet.
              </li>
              <li className="feature-intro__item feature-intro__item--circle">
                Lorem ipsum dolor sit amet.
              </li>
            </ul>
          </div>
        </div>
        <div className="feature__item">
          <div className="feature__image">
            <img src={feature3} alt="feature" className="" />
          </div>
          <div className="feature__info">
            <h3 className="feature__title">Why we are the best</h3>
            <p className="feature__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sunt consequuntur eaque odit rerum, voluptatem pariatur et.
            Fugiat numquam hic, vitae eaque tempora aut eum doloremque quasi saepe laboriosam non minus.</p>
            <ul className="feature-best__list">
              <li className="feature-best__item">
                <i className="fa fa-home feature-best__icon feature-best__icon--green"></i>
                <h4 className="feature-best__title">Non profitable organization</h4>
                <p className="feature-best__desc text-clamp text-clamp--2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Debitis accusantium quas, illum, saepe maiores nam alias voluptatibus 
                  praesentium doloremque eum quod veniam, sapiente sit autem tempore 
                  voluptatem deleniti mollitia id.</p>
              </li>
              <li className="feature-best__item">
                <i className="fa fa-home feature-best__icon feature-best__icon--purple"></i>
                <h4 className="feature-best__title">Non profitable organization</h4>
                <p className="feature-best__desc text-clamp text-clamp--2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Debitis accusantium quas, illum, saepe maiores nam alias voluptatibus 
                  praesentium doloremque eum quod veniam, sapiente sit autem tempore 
                  voluptatem deleniti mollitia id.</p>
              </li>
              <li className="feature-best__item">
                <i className="fa fa-home feature-best__icon feature-best__icon--red"></i>
                <h4 className="feature-best__title">Non profitable organization</h4>
                <p className="feature-best__desc text-clamp text-clamp--2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Debitis accusantium quas, illum, saepe maiores nam alias voluptatibus 
                  praesentium doloremque eum quod veniam, sapiente sit autem tempore 
                  voluptatem deleniti mollitia id.</p>
              </li>
              <li className="feature-best__item">
                <i className="fa fa-home feature-best__icon"></i>
                <h4 className="feature-best__title">Non profitable organization</h4>
                <p className="feature-best__desc text-clamp text-clamp--2">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Debitis accusantium quas, illum, saepe maiores nam alias voluptatibus 
                  praesentium doloremque eum quod veniam, sapiente sit autem tempore 
                  voluptatem deleniti mollitia id.</p>
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </section>
    </Router>
  );
}

export default Feature;

