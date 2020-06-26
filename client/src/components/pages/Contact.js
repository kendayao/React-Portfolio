import React, {useState} from "react"
import "./Contact.css"
import API from "../../utils/API"
import Connect from "../Connect"

function Contact(){

const [formObject, setFormObject]=useState({})

function handleInputChange(event){
  const name=event.target.name
  const value=event.target.value
  setFormObject({...formObject, [name]:value})
}

function handleFormSubmit(event){
  event.preventDefault();
  
  API.saveMessage({
    name: formObject.name,
    email: formObject.email,
    message: formObject.message
  }).then(res => console.log("success"))
  .catch(err => console.log(err));
  document.getElementById("form").reset()
}


  return(
    <section class="main-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Contact</h5>
                  <hr/>
                  <div class="row">
                    <div class="col-lg-12" >
                      <form id="form">
                        <div class="form-group">
                          <label for="exampleFormControlInput1">Name</label>
                          <input name="name" type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={handleInputChange}/>
                          <label for="exampleFormControlInput1">Email address</label>
                          <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" onChange={handleInputChange}/>
                          <label for="exampleFormControlTextarea1">Message</label>
                          <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Type message here...." onChange={handleInputChange}></textarea>
                          <button type="button" class="btn btn-info" onClick={handleFormSubmit}>Submit</button>
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