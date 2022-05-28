import React from 'react';
import useTools from '../../Hooks/useTools'
import Product from './Product';

const Products = () => {

    const [tools, setTools] = useTools();
    return (
        <div className='px-12'>
            <h1 className='text-center font-extrabold text-neutral mb-1 mt-5 text-5xl'>Featured Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    tools.map(tool => <Product
                        tool={tool}
                        key={tool._id}
                    ></Product>)
                }
            </div>
        </div>
    );
};
export default Products;