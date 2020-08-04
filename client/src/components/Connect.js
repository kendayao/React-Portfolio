import React from "react";
import "./Connect.css"
function Connect(){

    return(

        <div className="col-md-4">
          <div className="card connect-with-me-card">
            <div className="card-body">
              <h5 className="card-title">Connect with me</h5>
              <hr/>
              <div className="row">
                
                  <div className="col-lg-4 col-md-6 icon">
                  <a href="https://www.linkedin.com/in/kaeneth-dayao/" target="_blank" title="Linkedin Profile"><i className="fab fa-linkedin fa-4x"></i></a>
                  <p>Linkedin</p>
                  </div>
                <div className="col-lg-4 col-md-6 icon">
                  <a href="https://github.com/kendayao" target="_blank" title="Github"><i className="fab fa-github-square fa-4x"></i></a>
                  <p>Github</p>
                </div>
                <div className="col-lg-4 col-md-6 icon">
                  <a href="mailto:kendayao@gmail.com" title="Email Me"><i className="fas fa-at fa-4x"></i></a>
                  <p>Email</p>
                </div>
                <div className="col-lg-4 col-md-6 icon">
                  <a href="../../resume/resume3.pdf" target="_blank" title="Resume"><i className="far fa-file-pdf fa-4x"></i></a>
                  <p>Resume</p>
                </div>
                <div className="col-lg-4 col-md-6 icon">
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