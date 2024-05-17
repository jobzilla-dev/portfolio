import React, { useEffect } from 'react'
import '../assets/css/card-project.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import border from '../assets/img/border.png';
import aborder from '../assets/img/about-border.png';
import { Link } from "react-router-dom";


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

    <div className="container section-container" id='projects'>





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
                    <Link to="/web-design" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                        UX/UI Web-Design&#160;
                        </div>

                        {/* <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.11.2022
                        </span>
                        </div> */}
                    </Link>
                    </div>

                    <div class="ag-courses_item">
                    <Link to="/gallery" class="ag-courses-item_link">
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
                    </Link>
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
                        T-SHIRT Design
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

                    

                </div>
                </div>

            </div>



            






            


          </div>


    </div>

  


  )
}

export default Project