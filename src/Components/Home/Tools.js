import React from 'react';
import { Link } from 'react-router-dom';
import useTools from '../../Hooks/useTools';
import Tool from './Tool';
import Bounce from 'react-reveal/Bounce';

const Tools = () => {
    const [tools, setTools] = useTools();
    return (
        <div className='px-12'>
            <Bounce right cascade><h1 className='text-center font-extrabold text-neutral opacity-80 mb-10 mt-16 text-5xl'>Featured Tools</h1></Bounce>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.slice(0, 3).map(tool => <Tool
                        // tools.map(tool => <Tool
                        tool={tool}
                        key={tool._id}
                    ></Tool>)
                }
            </div>
            <div className='flex justify-center'>
                <Link style={{ textDecoration: 'none' }} to="/products">
                    <button className='font-extrabold text-white btn btn-neutral mt-5 mb-10 block w-full px-20 bg-gradient-to-r from-neutral to-primary'>Explore All Tools</button>
                </Link>
            </div>
        </div>
    );
};

export default Tools;