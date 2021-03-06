import React, {useState} from "react"
import "./Contact.css"
import API from "../../utils/API"
import Connect from "../Connect"
import Alert from "../Alert"

function Contact(){

const [formObject, setFormObject]=useState({})
const [alertState, setAlertState]=useState(null)

function handleInputChange(event){
  const name=event.target.name
  const value=event.target.value
  setFormObject({...formObject, [name]:value})
}

function handleFormSubmit(event){
  event.preventDefault();
  
  setAlertState(true)
  setTimeout(()=>{
    setAlertState(null);
  }, 4000);

  API.saveMessage({
    name: formObject.name,
    email: formObject.email,
    message: formObject.message
  }).then(res => console.log("success"))
  .catch(err => console.log(err));
  document.getElementById("form").reset()
}

  return(
    <section className="main-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Contact Me</h5>
                  <hr/>
                  <div className="row">
                    <div className="col-lg-12" >
                      <form id="form">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input name="name" type="name" className="form-control" id="name" placeholder="Name" required onChange={handleInputChange}/>
                          <label htmlFor="email">Email address</label>
                          <input name="email" type="email" className="form-control" id="email" placeholder="Email Address" required onChange={handleInputChange}/>
                          <label>Message</label>
                          <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Type message here...." onChange={handleInputChange}></textarea>
                          <button type="button" className='btn btn-info'  disabled={!formObject.message || !formObject.email || !formObject.name } onClick={handleFormSubmit}>Submit</button>
                          {alertState ? <Alert />: null}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Connect />
          </div>
        </div>
      </section>
    )

}

export default Contact