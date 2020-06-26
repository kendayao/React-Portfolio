import React from "react"
import "./AboutBody.css"

function AboutBody() {
return(
<section class="top-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h3 className="title">I'm Kaeneth</h3>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h3 class="subtitle">Full Stack Web Developer</h3>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <img class="img-fluid cloud1" src="../../images/cloud.png" alt="cloud_image"/>
        <img class="img-fluid cloud3" src="../../images/cloud.png" alt="cloud_image"/>
        <img class="img-fluid sun" src="../../images/sun.png" alt="cloud_image"/>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 ml-auto">
        <img class="img-fluid cloud2" src="../../images/cloud.png" alt="cloud_image"/>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <img class="img-fluid cloud4" src="../../images/cloud.png" alt="cloud_image"/>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <img class="img-fluid buildings" src="../../images/buildings.png" alt="mountain_image"/>
        <p class="building-attribution">"Icon made by Eucalyp from www.flaticon.com"</p>
        <p class="sun-attribution">"Sun icon made by Icongeek26 from www.flaticon.com"</p>
      </div>
    </div>
  </div>
</section>
)
}

export default AboutBody