import React from "react"
import "./About.css"
function About(){

    return(
    <section className="main-body">
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">About Me</h5>
              <hr/>
                <div className="row">
                  <div className="col-md-3" >
                    <img className="img-thumbnail about-me-image" src="../../images/Self-photo.jpg" alt="Kaeneth"/>
                  </div>
                  <div className="col-md-9">
                    <p className="card-text">Hello, my name is Kaeneth Dayao. I graduated from the University of California, Irvine in 2012 with a Bachelor Degree in Business Economics. After college, I worked for the Los Angeles Dodgers and several telecommunication startup companies in leadership roles. </p>
                    <p>I have over three years of supervisor and managerial experience. My experience has taught me to be a quick thinker, a self-starter, a problem-solver, and a team player. Moreover, I am always eager to learn new skills in order to reach my career goal. My goal is to be a full stack web developer and create useful websites and mobile applications that can help people in their everyday lives.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
          
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Connect with me</h5>
              <hr/>
              <a href="https://www.linkedin.com/in/kaeneth-dayao-3031808b/" target="_blank" title="Linkedin Profile"><i className="fab fa-linkedin fa-5x"></i></a>
              <a href="https://github.com/kendayao" target="_blank" title="Github"><i className="fab fa-github-square fa-5x"></i></a>
              <a href="mailto:kendayao@gmail.com" title="Email Me"><i className="fas fa-at fa-5x"></i></a>
              <a href="assets/resume/resume.pdf" target="_blank" title="Resume"><i className="far fa-file-pdf fa-5x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )


}

export default About