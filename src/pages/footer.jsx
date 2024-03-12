import React, { useEffect } from 'react'
import '../assets/css/project.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import fborder from '../assets/img/f-border.png';


function Footer() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (



          <div className="container footer-section">

            <div className="footer">
                <img src={fborder} className="footborder" style={{ width: '100%', objectFit: 'contain'}} alt="forder" />
                <span style={{ fontFamily: 'bebas', fontSize:'31px' , textAlign: 'right' , padding: '10px', color: '#CFD2E3'}}>jobzilla-dev.github.io</span>
            </div>
          </div>


    

  


  )
}

export default Footer