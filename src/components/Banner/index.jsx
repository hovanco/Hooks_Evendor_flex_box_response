import React from 'react';
// import "./banner.scss";

import "../../style.scss";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function Banner() {
  return (
    <Router>
    <section className="banner">
      {/* <div className="container"> */}
        <h1 className="banner__heading">The Kids playground</h1>
        <p className="banner_desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          At, sed modi animi quae explicabo ipsam totam id nisi voluptatem, ab quod repudiandae et architecto.</p>
        <div className="banner__buttons">
          <Link to="" className="btn btn--border btn--rounded">Explore</Link>
          <Link to="" className="btn btn--primary btn--rounded has--shadow">By Tickets</Link>
        </div>
      {/* </div> */}
    </section>
    </Router>
  )
}

export default Banner;

