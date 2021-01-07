import React from "react"
import "./Portfolio.css"
import Project from "../Project"

function Portfolio(props){
  
    return(
        
    <section className="main-body">
      <div className="portfolio-container">
        <h5>Projects</h5>
        <hr/>
          <Project portfolio={props.portfolio} />
      </div>
  </section> 
    )


}

export default Portfolio