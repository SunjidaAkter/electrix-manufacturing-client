import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { maxQuantity, minQuantity, _id, name, description, img, price } = tool;
    return (
        <div className='p-5 flex flex-col justify-between my-5 shadow-2xl rounded-lg border-inherit'>
            <div className='flex justify-center items-center h-full'>
                <img className='w-full rounded ' src={img} alt="" />
            </div>
            <div>
                <div className="">
                    <h2 className="text-secondary text-4xl mt-8 font-bold pt-2">{name}</h2>
                    <div className='flex justify-around items-center '>
                    </div>
                    <p className=" mb-8 "><b><span className='text-primary font-bold text-3xl'>${price}</span></b> </p>
                    <p className=""><b><span className='text-neutral text-xl'>Description :</span></b> <span className='text-primary text-xl text-cyan-900 font-bold'>{description}</span></p>
                    <p className=""><b><span className='text-neutral text-xl'>Available Quantity :</span></b> <span className='text-primary text-xl text-cyan-900 font-bold'>{maxQuantity}</span></p>
                    <p className="mb-4"><b><span className='text-neutral text-xl'>Minimum Quantity :</span></b> <span className='text-primary text-xl text-cyan-900 font-bold'>{minQuantity}</span></p>
                </div>


                <Link style={{ textDecoration: 'none' }} to={`/tool/${_id}`}>
                    <button class="btn btn-neutral w-full">PURCHASE</button>
                </Link>
            </div>
        </div>
    );
};

export default Tool;