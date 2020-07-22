import React from "react"


function Project(props){
   return( 
        <div className="row row-image">
          {props.portfolio.map(item=>
            <div className="col-md-6 portfolio-text-image">
              <img className="img-thumbnail portfolio-image" src={item.img} alt="assemble-app" />
              <a href={item.appLink} target="_blank"><h2 className="card-text">{item.appTitle}</h2></a>
              <a href={item.appRepo} target="_blank"><h6 className="card-text">Project Details</h6></a>
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