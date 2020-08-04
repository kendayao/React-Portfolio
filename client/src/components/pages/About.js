import React from "react"
import "./About.css"
import AboutBody from "../AboutBody"
import Skills from "../Skills"
function About(){

  return(
    <div>
    <AboutBody />
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
                    <p className="card-text">Hello, my name is Kaeneth Dayao. I graduated from the University of California, Irvine in 2012. After college, I worked at several telecommunication startup companies in leadership roles. I have over three years of supervisor and managerial experience. My experience has taught me to be a quick thinker, a self-starter, a problem-solver, and a team player. </p>
                    <p>During my time working in startups, I started to become interested with app and web development. I decided to start my journey and began to learn different programming languages to become a developer. As I continue to learn, I am becoming more excited with this field. I am always eager to learn new skills in order to reach my career goal. My goal is to be a full stack web developer and create useful websites and mobile applications that can help people in their everyday lives.</p>
                    <p>Lastly, I started a youtube channel that consist of short videos to help others with their coding journey.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </div>
  </section>

  



  </div>
)
}

export default About