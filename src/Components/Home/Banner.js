import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ background: `url("https://html.modernwebtemplates.com/electrix/images/slide01.jpg")` }}>
            <div class="hero-overlay bg-opacity-80"></div>
            <div class="hero-content text-center text-neutral-content">
                <div data-aos="zoom-in" class=" mt-0">
                    <p class="mb-5 mt-0 bg:text-3xl text-xl text-white  font-light">ELECTRIX MANUFACTURING</p>
                    <p class="mb-5 mt-0 bg:text-7xl text-5xl text-primary font-bold ">COMMITED</p>
                    <p class="mb-5 mt-0 bg:text-7xl text-5xl text-white  font-light">TO SUPER QUALITY</p>
                    <p class="mb-5">We won Many Industrial Awards and Got Many Certificates Since 2001-2016</p>
                    {/* <button class="btn btn-primary">Get Started</button> */}
                    <Link style={{ textDecoration: 'none' }} to="/products">
                        <button class="btn btn-primary text-white font-extrabold">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;