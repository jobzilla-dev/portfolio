import React, { useEffect } from 'react'
import '../assets/css/project.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import border from '../assets/img/border.png';
import aborder from '../assets/img/about-border.png';
import dp from '../assets/img/me-photo.png';
import ai from '../assets/img/skills/illustrator.png';
import pr from '../assets/img/skills/premiere.png';
import xd from '../assets/img/skills/xd.png';
import ps from '../assets/img/skills/photoshop.png';

function About() {

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





          <div className="about">

            <div className="low-bord">
                <div className="text">ABoUT ME</div>
                <img src={border} className="line" style={{ width: '1070px', objectFit: 'contain'}} alt="logo" />
            </div>


            <div className="about-content">
            {/* <img src={aborder} className="abt-brder" alt="abt"/> */}
                <img src={dp} className="photo" alt="dp"/>
              {/* <div className="photooo"><img src={me} className="jobz-photo" alt="logo" /></div> */}
              <div className="about-txt">
              <div className="skill-title">hEY ThERE!</div>
                <div className="abt-text">I'm <color style={{color: '#A2E32F'}}>Joebel Miniano</color> also known as JOBZ, a passionate <color style={{color: '#A2E32F'}}>web / graphic
                 designer</color> with a keen eye for detail and a love for all things design, I thrive on turning ideas into stunning visuals that leave a lasting impression. 
                 <color style={{color: '#A2E32F'}}> Design is my playground</color>, where I blend colors, shapes, and typography to create works of art that speak volumes.
                 Whether it's branding, illustration, or digital design,
                 </div>

                <div className="skill-section" style={{ marginTop: '40px'}}>
                    <div className="skill-title">SkILLS</div>
                    <div className="skill">
                    <div className="partner">
                    <div className="adobe">ADOBE ILLUSTRATOR <img src={ai} className="ai-logo" alt="dp" style={{marginLeft: '10px'}}/></div>
                    <div className="adobe">ADOBE PHOTOSHOP <img src={ps} className="ps-logo" alt="dp" style={{marginLeft: '10px'}}/></div>
                    </div>
                    <div className="partner1">
                    <div className="adobe">ADOBE XD <img src={xd} className="xd-logo" alt="dp" style={{marginLeft: '10px'}}/></div>
                    <div className="adobe">ADOBE PREMIERE <img src={pr} className="pr-logo" alt="dp" style={{marginLeft: '10px'}}/></div>
                    </div>
                    </div>     
                </div>
                

              </div> 
            </div>

            {/* PROJECTS */}

            {/* <div className="gallery">
                <img src={ai} alt="a house on a mountain"/>
                <img src={ai} alt="sime pink flowers"/>
                <img src={ai} alt="big rocks with some trees"/>
                <img src={ai} alt="a waterfall, a lot of tree and a great view from the sky"/>
                <img src={ai} alt="a cool landscape"/>
                <img src={ai} alt="inside a town between two big buildings"/>
                <img src={ai} alt="a great view of the sea above the mountain"/>
            </div> */}


            






            


          </div>


    </div>

  


  )
}

export default About