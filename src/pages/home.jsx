import React from 'react'
import '../assets/css/style.css'
import me from '../assets/img/jobz123.png';

function home() {
  return (

    <div className="container">
    
      <div className="home">

        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            {/* <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
                <a class="nav-link" href="#">ABOUT ME</a>
                <a class="nav-link" href="#">PROJECTS</a>
                <a class="nav-link-hire" href="#">HIRE ME</a>
              </div>
            </div>
          </div>
        </nav>

        <div className="home-content">
          {/* <div className="photooo"><img src={me} className="jobz-photo" alt="logo" /></div> */}
          <div className="land-txt" style={{textAlign: 'start'}}>
          <h1>JOBZ</h1><br></br>
          <h2 style={{color: 'orange', marginTop: '-37px'}}>WEB / GRAPHIC DESIGNER</h2>
          </div>


        </div>
      </div>
    </div>
  )
}

export default home