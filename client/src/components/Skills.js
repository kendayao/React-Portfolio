import React from "react"
import "./Skills.css"
function Skills(){

return (

  <div className="col-md-4">
    <div className="card skills-card">
      <div className="card-body">
        <h5 className="card-title">My Skills</h5>
        <hr/>
        <i className="fab fa-html5 fa-3x skills-icon" title="HTML"></i>
        <i className="fab fa-node fa-3x skills-icon" title="Node.js"></i>
        <i className="fab fa-css3-alt fa-3x skills-icon" title="CSS"></i>
        <img className="img1 skills-icon" title="MySQL" src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" alt="mysql" />
        <i className="fab fa-bootstrap fa-3x skills-icon" title="Bootstrap"></i>
        <i className="fab fa-github fa-3x skills-icon" title="Github"></i>
        <i className="fab fa-react fa-3x skills-icon" title="REACT" ></i>
        <img className="img1 skills-icon" title="jQuery" src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png" alt="jquery"/>
        <img className="img1 skills-icon" title="MERN" src="../images/mern.png" alt="Mern"/>
        <img className="img1 skills-icon" title="MongoDB" src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="mongodb"/>
        <img className="img1 skills-icon" title="Sequelize" src="https://cdn.iconscout.com/icon/free/png-256/sequelize-3-1175091.png" alt="sequelize"/>
        <i className="fab fa-js fa-3x skills-icon" title="JavaScript" ></i>
        <i className="fab fa-python fa-3x skills-icon" title="Python"></i>
        <i className="fab fa-npm fa-3x skills-icon" title="npm"></i>
        <img className="img1 skills-icon-firebase" title="Firebase" src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_502,h_518/https://keytotech.com/wp-content/uploads/2019/05/firebase.png" alt="firebase"/>
        <img className="img1 skills-icon-redux" title="Redux" src="https://img.stackshare.io/service/7374/react-redux.png" alt="redux"/>
        <i class="fab fa-php fa-3x skills-icon" title="Php"></i>
        <i class="fab fa-wordpress fa-3x skills-icon" title="Wordpress"></i>
        <img className="img1 skills-icon-redux" title="GraphQL" src="https://davidwalsh.name/demo/graphql-intro/graphql.png" alt="graphql"/>
      </div>
    </div>
  </div>

)
}

export default Skills