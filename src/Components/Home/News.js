import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ _news }) => {
    const { news, headline, img } = _news;
    return (
        <div className='flex flex-col justify-between  my-5 border border-1 border-slate-300 rounded-lg border-inherit'>
            <div>
                <img className='w-full rounded ' src={img} alt="" />
                <div className="px-5">
                    <h2 className="text-primary text-4xl mt-8 font-bold pt-2">{headline}</h2>
                    <div className='flex justify-around items-center '>
                    </div>
                    <p className=""> <span className='text-center text-xl text-slate-900 font-semibold'>{news}</span></p>

                </div>
            </div>


            <Link style={{ textDecoration: 'none' }} to={"/blogs"} className="flex justify-end items-center">
                <button class="my-5 text-right mr-5 text-neutral font-semibold=">SEE MORE</button>
            </Link>
        </div>
    );
};

export default News;