import React from 'react';
// import "./category.scss";
import "../../style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import cate1 from "../../assets/cate1.png";
import cate2 from "../../assets/cate2.png";
import cate3 from "../../assets/cate3.png";
import cate4 from "../../assets/cate4.png";


function Category() {
  return (
   <Router>

     <section className="category">
       {/* <div className="container"> */}
         <ul className="category__list">
           <li className="category__item">
             <img src={cate1} alt="nice watch" className="category__image"/>
             <h3 className="category__name">Safe Rides</h3>
             <Link className="category__details">
               Glutten Free <i className="fa fa-angle-right"></i>
             </Link>
           </li>
           <li className="category__item">
             <img src={cate2} alt="nice watch" className="category__image"/>
             <h3 className="category__name">Delicious Foods</h3>
             <Link className="category__details">
               Glutten Free <i className="fa fa-angle-right"></i>
             </Link>
           </li>
           <li className="category__item">
             <img src={cate3} alt="nice watch" className="category__image"/>
             <h3 className="category__name">Entertraiment</h3>
             <Link className="category__details">
               Glutten Free <i className="fa fa-angle-right"></i>
             </Link>
           </li>
           <li className="category__item">
             <img src={cate4} alt="nice watch" className="category__image"/>
             <h3 className="category__name">Ice-scream</h3>
             <Link className="category__details">
               Glutten Free <i className="fa fa-angle-right"></i>
             </Link>
           </li>
         </ul>
       {/* </div> */}
     </section>
   </Router>
  )
}

export default Category;

