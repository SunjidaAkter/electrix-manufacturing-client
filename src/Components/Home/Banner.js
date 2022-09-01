import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        fade: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: false
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="hero min-h-screen" style={{ background: `url("https://html.modernwebtemplates.com/electrix/images/slide01.jpg")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" mt-0">
                            <p className="mb-5 mt-0 lg:text-3xl text-xl text-white  font-light">ELECTRIX MANUFACTURING</p>
                            <Fade bottom cascade><p className="mb-0 mt-0 lg:text-8xl text-5xl text-primary font-bold ">COMMITED</p></Fade>
                            <Fade bottom cascade><p className="mb-5 mt-0 lg:text-8xl text-5xl text-white  font-light">TO SUPER QUALITY</p></Fade>
                            <p className="mb-5 text-2xl italic">We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                            {/* <button className="btn btn-outline border border-primary text-base px-7">Get Started</button> */}
                            <Link style={{ textDecoration: 'none' }} to="/products">
                                <button className="btn hover:btn hover:bg-primary bg-opacity-50 hover:text-white border border-teal-200 text-base px-7 text-white font-bold">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen" style={{ background: `url("https://html.modernwebtemplates.com/electrix/images/slide02.jpg")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" mt-0">
                            <p className="mb-5 mt-0 lg:text-3xl text-xl text-white  font-light">ELECTRIX MANUFACTURING</p>
                            <Fade bottom cascade><p className="mb-0 mt-0 lg:text-8xl text-5xl text-primary font-bold ">APPLICATION</p></Fade>
                            <Fade bottom cascade><p className="mb-5 mt-0 lg:text-8xl text-5xl text-white  font-light">OF TECHNOLOGY</p></Fade>
                            <p className="mb-5 text-2xl italic">We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                            {/* <button className="btn btn-outline border border-primary text-base px-7">Get Started</button> */}
                            <Link style={{ textDecoration: 'none' }} to="/products">
                                <button className="btn  hover:bg-primary bg-opacity-50 hover:text-white border border-teal-200 text-base px-7 text-white font-bold">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="hero min-h-screen" style={{ background: `url("https://html.modernwebtemplates.com/electrix/images/slide03.jpg")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className=" mt-0">
                            <p className="mb-5 mt-0 lg:text-3xl text-xl text-white  font-light">ELECTRIX MANUFACTURING</p>
                            <Fade bottom cascade><p className="mb-0 mt-0 lg:text-8xl text-5xl text-primary font-bold ">PROVIDING</p></Fade>
                            <Fade bottom cascade><p className="mb-5 mt-0 lg:text-8xl text-5xl text-white  font-light">BEST PRODUCTS</p></Fade>
                            <p className="mb-5 text-2xl italic">We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                            {/* <button className="btn btn-outline border border-primary text-base px-7">Get Started</button> */}
                            <Link style={{ textDecoration: 'none' }} to="/products">
                                <button className="btn  hover:bg-primary bg-opacity-50 hover:text-white border border-teal-200 text-base px-7 text-white font-bold">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Banner;