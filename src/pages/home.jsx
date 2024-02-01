import React, { useEffect } from 'react'
import '../assets/css/style.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import logo from '../assets/img/jobz-w.png';
import "../assets/fonts/Karantina-Regular.ttf";

function Home() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (

    <div className="container">
      {/* <div className="loader-relative">
        <div className="loader">
          <Lottie options={defaultOptions}
            height={100}
            width={100} />
        </div>
      </div> */}

      <div className="container">



        <div className="old">

          <div className="home">

            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
              <div className="photooo"><img src={logo} className="jobz-logo" alt="logo" style={{width: '100px'}} /></div>
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
              <div className="land-txt" style={{ textAlign: 'start' }}>
                <h1>JOBZ</h1><br></br>
                <h2 style={{ color: 'orange', marginTop: '-85px', fontSize:'60px'}}>WEB / GRAPHIC DESIGNER</h2>
              </div>


            </div>
          </div>


        </div>

      </div>


    </div>

  


  )
}

export default Home