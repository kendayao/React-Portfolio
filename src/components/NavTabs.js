import React from "react"
import "./NavTabs.css"
import { Link, useLocation } from "react-router-dom";

function NavTabs(){
    

    return(

   <div className="container-fluid nav-bar-container">
      <nav className="navbar navbar-expand-sm navbar-light navbar-custom">
        <div className="Name">
          <a className="navbar-brand" href="index.html">Kaeneth Dayao</a>
        </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto flex-row ml-md-auto d-md-flex">
            <li className="nav-item">
              <a className="nav-link" href="index.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
          </div>
      </nav>
    </div>
    
    );




    
}


export default NavTabs