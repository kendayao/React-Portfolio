import React from "react";
import "./Connect.css"
function Connect(){

    return(

        <div className="col-md-4">
          <div className="card connect-with-me-card">
            <div className="card-body">
              <h5 className="card-title">Connect with me</h5>
              <hr/>
              <a href="https://www.linkedin.com/in/kaeneth-dayao/" target="_blank" title="Linkedin Profile"><i className="fab fa-linkedin fa-5x"></i></a>
              <a href="https://github.com/kendayao" target="_blank" title="Github"><i className="fab fa-github-square fa-5x"></i></a>
              <a href="mailto:kendayao@gmail.com" title="Email Me"><i className="fas fa-at fa-5x"></i></a>
              <a href="../../resume/resume3.pdf" target="_blank" title="Resume"><i className="far fa-file-pdf fa-5x"></i></a>
            </div>
          </div>
        </div>
    )



}

export default Connect