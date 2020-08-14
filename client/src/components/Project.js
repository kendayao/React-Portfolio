import React from "react"


function Project(props){
   return( 
        <div className="row row-image">
          {props.portfolio.map(item=>
            <div className="col-md-6 portfolio-text-image">
              <div className="image-container">
              <img className="img-thumbnail portfolio-image" src={item.img} alt="assemble-app" />
              <a href={item.appLink} target="_blank" class="links"><h2 className="card-text">{item.appTitle}</h2></a>
              <a href={item.appRepo} target="_blank" class="links"><h6 className="card-text-details">Project Details</h6></a>
              <a href={item.appDemo} target="_blank" class="links"><h6 className="card-text-demo">Video Demo</h6></a>
              </div>
              <div class="middle">
                <div class="text">
                  {item.languages}
                </div>
            </div>
            </div>
          )}
        </div>
   )

}

export default Project