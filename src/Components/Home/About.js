import React from 'react';
import architect from '../../Assets/architect.png'
import trust from '../../Assets/trust.png'
import expert from '../../Assets/expert.png'

const About = () => {
    return (
        <div class="hero min-h-screen" style={{ "background-image": "url(https://html.modernwebtemplates.com/electrix/img/parallax/features.jpg)", "backgroundAttachment": "fixed" }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content flex-col lg:flex-row px-12">
                <div className='pr-5 lg:w-1/2'>
                    <p className='text-xl text-white font-semibold'>ABOUT</p>
                    <p className='font-extrabold text-white text-5xl my-3'>ELECTRI<span className='text-primary'>X</span></p>
                    <p className='text-lg text-white font-semibold'>ElectriX helps manufacturers maximize the productivity they gain from their pneumatic tools, diaphragm pumps, chain hoists and related supplies. We dedicated to helping our customers andreduce operating costs.</p>
                </div>
                <div className='mt-12 lg:w-1/2'>
                    <div className='flex'>
                        <img style={{ "width": "35px", "height": "35px" }} src={expert} alt="" />
                        <p className='ml-3 text-3xl font-extrabold text-primary mb-10'>WE ARE PROFESSIONALS</p>
                    </div>
                    <div className='flex'>
                        <img style={{ "width": "35px", "height": "35px" }} src={trust} alt="" />
                        <p className='ml-3 text-3xl font-extrabold text-accent mb-10'>WE ARE TRUSTED</p>
                    </div>
                    <div className='flex'>
                        <img style={{ "width": "35px", "height": "35px" }} src={architect} alt="" />
                        <p className='ml-3 text-3xl font-extrabold text-secondary mb-10'>WE ARE EXPERT</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;

//ABOUT
//
// ElectriX helps manufacturers maximize the productivity they gain from their pneumatic tools, diaphragm pumps, chain hoists and related supplies. We dedicated to helping our customers andreduce operating costs.