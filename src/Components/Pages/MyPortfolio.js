import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='p-12'>
            <p className='mt-10 font-extrabold text-7xl text-primary'>Sunjida Akter</p>
            <p className='mt-3 font-semibold text-3xl text-primary'>sanjidabintesayid7@gmail.com</p>
            <div class="divider my-10"></div>

            <div className='grid lg:grid-cols-2 grid-cols-1'>
                <div>
                    <p className='mt-3 font-semibold text-3xl text-primary'>Skills :</p>
                    <p className='mt-3 font-normal text-xl text-primary'>Comfortable : </p>
                    <ol>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> React</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> JavaScript</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> HTML5 | CSS3</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> Bootstrap | Tailwind | Styled-Components</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> NodeJS | ExpressJS | MongoDB</li>
                        <li className='ml-5 font-bold text-slate-900'><span className='font-extrabold text-slate-900'>o</span> Firebase | Netlify | Heroku</li>
                    </ol>
                </div>
                <div>
                    <p className='mt-3 font-semibold text-3xl text-primary'>Skills :</p>

                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;