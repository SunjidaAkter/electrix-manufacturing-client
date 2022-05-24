import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ _news }) => {
    const { news, headline, img } = _news;
    return (
        <div className='flex flex-col justify-between p-5  my-5 shadow-2xl rounded-lg border-inherit'>
            <div>
                <img className='w-full rounded ' src={img} alt="" />
                <div className="">
                    <h2 className="text-primary text-4xl mt-8 font-bold pt-2">{headline}</h2>
                    <div className='flex justify-around items-center '>
                    </div>
                    <p className=""> <span className='text-center text-xl text-slate-900 font-semibold'>{news}</span></p>

                </div>
            </div>


            <Link style={{ textDecoration: 'none' }} to={"/blogs"}>
                <button class="my-5 btn btn-neutral w-full">SEE MORE</button>
            </Link>
        </div>
    );
};

export default News;