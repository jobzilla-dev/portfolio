import React, { useEffect } from 'react'
import '../assets/css/card-project.css'
import '../assets/css/input.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import border from '../assets/img/border.png';
import aborder from '../assets/img/about-border.png';


function Hire() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (

    <div className="container section-container" id='hire'>





          <div className="hire-me">

            <div className="low-bord">
                <div className="text">hIRE ME</div>
                <img src={border} className="line" style={{ width: '1070px', objectFit: 'contain'}} alt="logo" />
            </div>


            <div className="hire-content">

              <div className="hire-text">
                  <span className='lets' style={{ fontSize: '175px',}}>LET'S</span>
                  <span className='work'style={{ fontSize: '145px', marginTop: '-110px' , color: '#CFD2E3'}} >WoRK</span>
                  <span className='together' style={{ fontSize: '84px' , marginTop: '-75px'}}>ToGETHER</span>
              </div>

              <div className ="input-group" style={{fontFamily: 'bebas'}}>
                  <input type="email" class="input" id="Email" name="Email" placeholder="type your email here" autocomplete="off"/>
                  <input class="button--submit" value="Subscribe" type="submit"/>
              </div>

            </div>



            






            


          </div>


    </div>

  


  )
}

export default Hire