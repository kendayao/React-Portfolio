import React from "react"
import "./NavTabs.css"
import { Link, useLocation } from "react-router-dom";

function NavTabs(){
    

    return(

   <div class="container-fluid nav-bar-container">
      <nav class="navbar navbar-expand-sm navbar-light navbar-custom">
        <div class="Name">
          <a class="navbar-brand" href="index.html">Kaeneth Dayao</a>
        </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto flex-row ml-md-auto d-md-flex">
            <li class="nav-item">
              <a class="nav-link" href="index.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
          </div>
      </nav>
    </div>
    
    );




    
}


export default NavTabs