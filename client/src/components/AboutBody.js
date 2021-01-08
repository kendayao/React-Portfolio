import React from "react"
import "./AboutBody.css"

function AboutBody() {
  
return(
<section className="top-body">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1 className="title">Hello World!</h1>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1 className="subtitle">I'm Kaeneth</h1>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h3 className="subtitle">Full Stack Web Developer</h3>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <img className="img-fluid cloud1" src="../../images/cloud.png" alt="cloud_image"/>
        <img className="img-fluid sun" src="../../images/sun.png" alt="cloud_image"/>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6 ml-auto">
        <img className="img-fluid cloud2" src="../../images/cloud.png" alt="cloud_image"/>
        <img className="img-fluid plane" src="../../images/plane.png" alt="cloud_image"/>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4">
        <img className="img-fluid cloud3" src="../../images/cloud.png" alt="cloud_image"/>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <img className="img-fluid buildings" src="../../images/buildings.png" alt="mountain_image"/>
        <p className="building-attribution">"Icon made by Eucalyp from www.flaticon.com"</p>
        <p className="sun-attribution">"Sun icon made by Icongeek26 from www.flaticon.com"</p>
      </div>
    </div>
  </div>
</section>
)
}

export default AboutBody