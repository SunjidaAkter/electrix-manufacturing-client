import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='p-12'>
            <p className='mt-10 font-extrabold lg:text-7xl text-3xl text-cyan-800'>Sunjida Akter</p>
            <p className='mt-3 font-bold lg:text-3xl text-xl text-cyan-800'>sanjidabintesayid7@gmail.com</p>
            <div class="divider my-10"></div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <div className='mt-0'>
                    <p className='mt-0 mb-12 font-extrabold lg:text-6xl text-2xl text-cyan-800'>Projects</p>
                    <div className='text-white bg-neutral p-5 w-full rounded-2xl shadow-2xl my-3'>
                        <p className='mt-3 font-extrabold text-3xl text-teal-300'>IMPEL :</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'>Description : </p>
                        <p className='ml-5 font-bold text-white'>Car dealership site</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'>Server Side Code : </p>
                        <p className='ml-5 font-bold text-white'>https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-SunjidaAkter</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'>Live Website Link : </p>
                        <p className='ml-5 font-bold text-white'>https://eleventh-assignment-5e03e.web.app/</p>

                    </div>
                    <div className='text-white bg-neutral p-5 w-full rounded-2xl shadow-2xl my-3'>
                        <p className='mt-3 font-extrabold text-3xl text-teal-300'>INSHOT :</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'> Description : </p>
                        <p className='ml-5 font-bold text-white'>A Photographer's Site</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'> code link : </p>
                        <p className='ml-5 font-bold text-white'> https://github.com/programming-hero-web-course-4/independent-service-provider-SunjidaAkter</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'>live site : </p>
                        <p className='ml-5 font-bold text-white'>https://tenth-assignment-ee402.web.app</p>
                    </div>
                    <div className='text-white bg-neutral p-5 w-full rounded-2xl shadow-2xl my-3'>
                        <p className='mt-3 font-extrabold text-3xl text-teal-300'>ICE LAB :</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'>Description : </p>
                        <p className='ml-5 font-bold text-white'>Ice cream review site</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'>code link : </p>
                        <p className='ml-5 font-bold text-white'>https://github.com/programming-hero-web-course-4/product-analysis-website-SunjidaAkter</p>
                        <p className='mt-3 font-extrabold text-xl text-teal-300'>live site : </p>
                        <p className='ml-5 font-bold text-white'>https://icelab-icecream-shop.netlify.app/</p>
                    </div>

                </div>
                <div>
                    <p className='mt-0 mb-12 font-extrabold lg:text-6xl text-xl text-cyan-800'>Strength</p>
                    <p className='mt-6 font-extrabold text-3xl text-cyan-800'>Education :</p>
                    <p className='mt-3 font-extrabold text-xl text-cyan-800'>BSc (Honours) in Mathematics </p>
                    <p className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> University of Dhaka</p>
                    <p className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> Session : 2015-2016</p>
                    <p className='mt-6 font-extrabold text-3xl text-cyan-800'>Skills :</p>
                    <p className='mt-3 font-extrabold text-xl text-cyan-800'>Comfortable : </p>
                    <ol>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> React</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> JavaScript</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> HTML5 | CSS3</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> Bootstrap | Tailwind | Styled-Components</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> NodeJS | ExpressJS | MongoDB</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> Firebase | Netlify | Heroku</li>
                    </ol>
                    <p className='mt-3 font-extrabold text-xl text-cyan-800'>Familiar : </p>
                    <ol>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> C Language</li>
                    </ol>

                    <p className='mt-3 font-extrabold text-xl text-cyan-800'>Tools : </p>
                    <ol>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> Git | Figma</li>
                    </ol>
                </div>



            </div>
        </div>
    );
};

export default MyPortfolio;