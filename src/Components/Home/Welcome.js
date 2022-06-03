import { ArrowRightIcon, CheckIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';

const Welcome = () => {
    return (
        <div class="hero min-h-screen" style={{ "background-image": "url(https://html.modernwebtemplates.com/electrix/img/parallax/about.jpg)" }}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <span></span>
                <div class=" text-center text-neutral ">
                    <div class="max-w-md">
                        <p class="text-4xl text-neutral font-normal">WELCOME TO</p>
                        <p class="mb-5 text-7xl text-neutral font-extrabold">ELECTRI<span className='text-primary'>X</span></p>
                        <p class="my-10 text-lg  font-semibold">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                        <p className="mt-2 flex text-[15px] text-slate-800 items-center px-10 font-bold"><CheckIcon className="w-6 h-6 mr-3 text-primary font-bold"></CheckIcon>Ground round tenderloin drumstick</p>
                        <p className="mt-2 flex text-[15px] text-slate-800 items-center px-10 font-bold"><CheckIcon className="w-6 h-6 mr-3 text-primary font-bold"></CheckIcon> Burgdoggen chuck pork loin</p>
                        <p className="mt-2 flex text-[15px] text-slate-800 items-center px-10 font-bold"><CheckIcon className="w-6 h-6 mr-3 text-primary font-bold"></CheckIcon>Venison t-bone alcatra bacon porch</p>
                        {/* <button class="btn btn-outline btn-primary btn-lg font-bold">About Us</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;