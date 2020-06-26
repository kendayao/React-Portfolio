import React from "react"
import "./Contact.css"
function Contact(){

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
                      <form>
                        <div class="form-group">
                          <label for="exampleFormControlInput1">Name</label>
                          <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                          <label for="exampleFormControlInput1">Email address</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
                          <label for="exampleFormControlTextarea1">Message</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Type message here...."></textarea>
                          <button type="button" class="btn btn-info">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Connect with me</h5>
                    <hr/>
                    <a href="https://www.linkedin.com/in/kaeneth-dayao-3031808b/" target="_blank" title="Linkedin Profile"><i class="fab fa-linkedin fa-5x"></i></a>
                    <a href="https://github.com/kendayao" target="_blank" title="Github"><i class="fab fa-github-square fa-5x"></i></a>
                    <a href="mailto:kendayao@gmail.com" title="Email Me"><i class="fas fa-at fa-5x"></i></a>
                    <a href="../../resume/resume.pdf" target="_blank" title="Resume"><i class="far fa-file-pdf fa-5x"></i></a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    )


}

export default Contact