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
              <img className="img1 skills-icon" title="MySQL" src="../images/mysql.png" alt="mysql" />
              <i className="fab fa-bootstrap fa-3x skills-icon" title="Bootstrap"></i>
              <i className="fab fa-github fa-3x skills-icon" title="Github"></i>
              <i className="fab fa-react fa-3x skills-icon" title="REACT" ></i>
              <img className="img1 skills-icon" title="jQuery" src="../images/jquery.png" alt="jquery"/>
              <img className="img1 skills-icon" title="MERN" src="../images/mern.png" alt="Mern"/>
              <img className="img1 skills-icon" title="MongoDB" src="../images/mongdb.png" alt="mongodb"/>
              <img className="img1 skills-icon" title="Sequelize" src="../images/sequelize.png" alt="sequelize"/>
              <i className="fab fa-js fa-3x skills-icon" title="JavaScript" ></i>
              <i className="fab fa-python fa-3x skills-icon" title="Python"></i>
            </div>
          </div>
        </div>

)
}

export default Skills