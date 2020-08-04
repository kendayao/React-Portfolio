import React from "react";
import "./Connect.css"
import { Link, useLocation } from "react-router-dom"

function Connect(){
  const location = useLocation();
    return(

        <div className="col-md-4">
          <div className="card connect-with-me-card">
            <div className="card-body">
              <h5 className="card-title">Connect with me</h5>
              <hr/>
              <div className="row">
                
                  <div className="col-lg-4 col-md-6 col-sm-6 icon">
                  <a href="https://www.linkedin.com/in/kaeneth-dayao/" target="_blank" title="Linkedin Profile"><i className="fab fa-linkedin fa-4x"></i></a>
                  <p>Linkedin</p>
                  </div>
                <div className="col-lg-4 col-md-6 col-sm-6 icon">
                  <a href="https://github.com/kendayao" target="_blank" title="Github"><i className="fab fa-github-square fa-4x"></i></a>
                  <p>Github</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 icon">
                  <a href="mailto:kendayao@gmail.com" title="Email Me"><i className="fas fa-at fa-4x"></i></a>
                  <p>Email</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 icon">
                  <Link to="/resume/resume3.pdf" id="resume-icon" target="_blank" className={location.pathname === "./resume/resume3.pdf" ? "nav-link active" : "nav-link"}>
                    <i className="far fa-file-pdf fa-4x"></i>
                  </Link>
                  <p className="resume-text">Resume</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 icon">
                  <a href="https://www.youtube.com/channel/UCcD-il-fawZbObChZPpRfrw" target="_blank" title="Youtube"><i class="fab fa-youtube fa-4x"></i></a>
                  <p>Youtube</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        
    )



}

export default Connect