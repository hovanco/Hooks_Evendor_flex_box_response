import React from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Feature from "./components/Feature";
import Partner from './components/Partner';
import Connect from './components/Connect';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';



import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <div className="container">
          <Header />
        <Banner />
        <Category />
        <Feature />
        <Partner />
        <Connect />
        <Subscribe />
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

