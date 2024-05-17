import React, { useEffect } from 'react'
import '../assets/css/style.css'
import '../assets/css/gal.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import logo from '../assets/img/jobz-w.png';
import border from '../assets/img/border.png';
import "../assets/fonts/Karantina-Regular.ttf";
import border3 from '../assets/img/f-border.png';
import { Link } from "react-router-dom";

import w1 from '../assets/img/web-des/1.png';
import w2 from '../assets/img/web-des/2.png';
import w3 from '../assets/img/web-des/3.png';
import w4 from '../assets/img/web-des/4.png';
import w5 from '../assets/img/web-des/5.png';
import w6 from '../assets/img/web-des/6.png';
import w7 from '../assets/img/web-des/7.png';
import w8 from '../assets/img/web-des/8.png';
import w9 from '../assets/img/web-des/9.png';
import w10 from '../assets/img/web-des/10.png';
import w11 from '../assets/img/web-des/11.png';
import w12 from '../assets/img/web-des/12.png';
import w13 from '../assets/img/web-des/13.png';
import w14 from '../assets/img/web-des/14.png';
import w15 from '../assets/img/web-des/15.png';
import w16 from '../assets/img/web-des/16.png';










function Webdesign() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };




    return (

        <div className="container section-container">

            <div className="web-design">

            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid">
              <Link to="/" className="photooo"><img src={logo} className="jobz-logo" alt="logo" style={{width: '100px'}} /></Link>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <Link to="/" class="nav-link" aria-current="page" href="#">HoME</Link>
                    <a class="nav-link" href="#about">ABoUT ME</a>
                    <a class="nav-link" href="#projects">PRoJECTS</a>
                    <a class="nav-link-hire" href="#hire">hIRE ME</a>
                  </div>
                </div>
              </div>
            </nav>

            <div className="low-bord">
                <div className="text">WEB dESIGN</div>
                <img src={border} className="line" style={{ width: '1020px', objectFit: 'contain'}} alt="logo" />
            </div>


            <div class="container page-top">

                    <div class="row">

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w1">
                                <img src={w1} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w1}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w2">
                                <img src={w2} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w2}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w3">
                                <img src={w3} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w3}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w4">
                                <img src={w4} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w4}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w5">
                                <img src={w5} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w5}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w6">
                                <img src={w6} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w6}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w7">
                                <img src={w7} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w7}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w8">
                                <img src={w8} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w8}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#w9">
                                <img src={w9} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="w9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-l ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={w9}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        </div>

                        </div>


                

                <div className="footer" style={{marginTop: '30px'}}>
                <img src={border3} className="footborder" style={{ width: '100%', objectFit: 'contain'}} alt="forder" />
                <span style={{ fontFamily: 'bebas', fontSize:'31px' , textAlign: 'right' , padding: '10px', color: '#CFD2E3'}}>jobzilla-dev.github.io</span>
            </div>
          
            </div>


        </div>




    )
}

export default Webdesign