import React from "react"
import "./NavTabs.css"
import { Link, useLocation } from "react-router-dom";

function NavTabs(){
  const location = useLocation();

    return(

   <div className="container-fluid nav-bar-container">
      <nav className="navbar navbar-expand-sm navbar-light navbar-custom">
        <div className="Name">
          <a className="navbar-brand" href="/">Kaeneth Dayao</a>
        </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto flex-row ml-md-auto d-md-flex">
            <li className="nav-item">
              <Link to="/" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </li>
          </ul>
          </div>
      </nav>
    </div>
    
    );

}


export default NavTabs