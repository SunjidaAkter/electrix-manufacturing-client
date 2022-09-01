import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


const Tool = ({ tool }) => {
    const { maxQuantity, minQuantity, _id, name, description, img, price } = tool;
    return (

        <div className=' flex flex-col justify-between my-5 shadow-2xl rounded-lg border-inherit relative'>
            <div className='flex justify-center items-center h-full'>
                <Slide bottom cascade>
                    <img className='w-full rounded ' src={img} alt="" />
                </Slide >
            </div>
            <div>
                <div className="p-5">

                    <Slide bottom cascade><h2 className="text-neutral  text-4xl text-center font-extrabold uppercase pt-2">{name}</h2>  </Slide >
                    <div className='flex justify-around items-center '>
                    </div>
                    <Slide bottom cascade><p className="absolute top-0 bg-neutral  p-1 rounded-md text-white left-0 mb-3 "><b><span className='text-white font-bold text-3xl'>${price}</span></b> </p></Slide>
                    {/* <p className=""><b><span className='text-neutral text-xl'>Description :</span></b> <span className='text-neutral  text-xl text-cyan-900 font-bold'>{description}</span></p>
                    <p className=""><b><span className='text-neutral text-xl'>Available Quantity :</span></b> <span className='text-neutral  text-xl text-cyan-900 font-bold'>{maxQuantity}</span></p>
                    <p className="mb-4"><b><span className='text-neutral text-xl'>Minimum Quantity :</span></b> <span className='text-neutral  text-xl text-cyan-900 font-bold'>{minQuantity}</span></p> */}
                </div>

                <Slide bottom cascade>
                    <Link style={{ textDecoration: 'none' }} to={`/tool/${_id}`}>
                        <button class="btn hover:border-neutral hover:border-2 hover:bg-primary bg-neutral hover:text-neutral hover:font-extrabold text-white text-xl font-bold w-full">PURCHASE</button>
                    </Link>
                </Slide >
            </div>

        </div>

    );
};

export default Tool;