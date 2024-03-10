import React, { useEffect } from 'react'
import '../assets/css/card-project.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import border from '../assets/img/border.png';
import aborder from '../assets/img/about-border.png';

function Project() {

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
                <div className="text">PRoJECTS</div>
                <img src={border} className="line" style={{ width: '1070px', objectFit: 'contain'}} alt="logo" />
            </div>


            <div className="project-content">
            <div class="ag-format-container">
                <div class="ag-courses_box">
                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        GRAPHIC ILLUSTRATIONS
                        </div>

                        {/* <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.11.2022
                        </span>
                        </div> */}
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        UX/UI Web-Design&#160;+ Mobile Design
                        </div>

                        {/* <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.11.2022
                        </span>
                        </div> */}
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        SOCIAL MEDIA POSTERS
                        </div>

                        {/* <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.11.2022
                        </span>
                        </div> */}
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        LOGO DESIGNS
                        </div>

                        {/* <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.11.2022
                        </span>
                        </div> */}
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Motion Design
                        </div>

                        {/* <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            30.11.2022
                        </span>
                        </div> */}
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Front-end development<br></br>
                        HTML, CSS, REACT
                        </div>
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg">
                        </div>
                        <div class="ag-courses-item_title">
                        TSHIRT DESIGNS
                        </div>
                    </a>
                    </div>

                    <div class="ag-courses_item">
                    <a href="#" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        Interior Design
                        </div>

                        {/* <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            31.10.2022
                        </span>
                        </div> */}
                    </a>
                    </div>

                </div>
                </div>
            </div>



            






            


          </div>


    </div>

  


  )
}

export default Project