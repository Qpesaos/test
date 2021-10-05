import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: true,
    }
    return (
        <section>
            <Slider {...settings}>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/slider1.png" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-discord"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                             
                            {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li> */}
                        </ul>
                        <div className="details">
                            <h2>Show him what you got <span className="job-title">SPL</span></h2>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/slider2.png" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-discord"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                            
                            {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li> */}
                        </ul>
                        <div className="details">
                            <h2>Long live the Empire <span className="job-title">SPL</span></h2>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/slider3.png" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-discord"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                            
                            {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li> */}
                        </ul>
                        <div className="details">
                            <h2>Nyan Space <span className="job-title">SPL</span></h2>
                        </div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/slider4.png" />
                        </div>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-discord"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                            
                            {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li> */}
                        </ul>
                        <div className="details">
                            <h2> Hot or Cold? <span className="job-title">SPL</span></h2>
                        </div>
                    </div>
                </div>                
                <div className="card-wrapper">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/3.png" />
                        </div>
                        <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-discord"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            {/* <li><a href="#"><i className="fa fa-instagram"></i></a></li> */}
                            
                            {/* <li><a href="#"><i className="fa fa-dribbble"></i></a></li> */}
                        </ul>
                        <div className="details">
                            <h2>Martian Invasion <span className="job-title">SPL</span></h2>
                        </div>
                    </div>
                </div>
                
            </Slider>
        </section>
    )
}

export default ImageSlider

