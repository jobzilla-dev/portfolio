import React, { useEffect } from 'react'
import '../assets/css/style.css'
import '../assets/css/gal.css'
// import Lottie from 'react-lottie';
import * as animationData from '../assets/json/butt.json'
import logo from '../assets/img/jobz-w.png';
import border from '../assets/img/border.png';
import "../assets/fonts/Karantina-Regular.ttf";
import p51 from '../assets/img/posters/51.png';
import p35 from '../assets/img/posters/35.png';
import p40 from '../assets/img/posters/40.png';
import p4 from '../assets/img/posters/4.png';
import p5 from '../assets/img/posters/5.png';
import p6 from '../assets/img/posters/6.png';
import p7 from '../assets/img/posters/7.png';
import p49 from '../assets/img/posters/49.png';
import p9 from '../assets/img/posters/9.png';
import p10 from '../assets/img/posters/10.png';
import p11 from '../assets/img/posters/11.png';
import p34 from '../assets/img/posters/34.png';
import p53 from '../assets/img/posters/53.png';
import p14 from '../assets/img/posters/14.png';
import p15 from '../assets/img/posters/15.png';
import p16 from '../assets/img/posters/16.png';
import p17 from '../assets/img/posters/17.png';
import p18 from '../assets/img/posters/18.png';
import p54 from '../assets/img/posters/54.png';
import p20 from '../assets/img/posters/20.png';




function Gallery() {

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

            <div className="gallery-s">

            <div className="low-bord">
                <div className="text">SoCiaL MeDiA PoStERS</div>
                <img src={border} className="line" style={{ width: '740px', objectFit: 'contain'}} alt="logo" />
            </div>

                <div class="container page-top">

                    <div class="row">

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal1">
                                <img src={p51} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p51}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal2">
                                <img src={p35} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p35}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal3">
                                <img src={p40} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p40}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal4">
                                <img src={p4} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p4}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal5">
                                <img src={p5} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p5}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal6">
                                <img src={p6} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p6}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal7">
                                <img src={p7} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p7}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal8">
                                <img src={p49} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p49}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#modal9">
                                <img src={p9} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="modal9" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p9}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m10">
                                <img src={p10} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m10" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p10}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m11">
                                <img src={p11} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m11" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p11}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m12">
                                <img src={p34} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m12" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p34}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m13">
                                <img src={p53} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m13" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p53}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m14">
                                <img src={p14} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m14" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p14}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m15">
                                <img src={p15} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m15" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p15}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m16">
                                <img src={p16} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m16" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p16}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m17">
                                <img src={p17} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m17" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p17}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m18">
                                <img src={p18} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m18" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p18}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m19">
                                <img src={p54} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m19" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p54}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                            <div class="img1" data-bs-toggle="modal" data-bs-target="#m20">
                                <img src={p20} class="zoom img-fluid " alt=""></img>
                            </div>
                        </div>

                        <div class="modal fade" id="m20" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl ">
                                <div class="modal-content" style={{backgroundColor:'#242527'}}>
                                    <div class="modal-body">
                                    <img src={p20}  class="mods img-fluid " alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* end */}

                        



                    
                    </div>
                



                </div>
                
            </div>


        </div>




    )
}

export default Gallery