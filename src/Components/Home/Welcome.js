import { ArrowRightIcon, CheckIcon, ChevronRightIcon } from '@heroicons/react/solid';
import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Jump from 'react-reveal/Jump';

const Welcome = () => {
    return (
        <div class="hero min-h-screen" style={{ "background-image": "url(https://html.modernwebtemplates.com/electrix/img/parallax/about.jpg)" }}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <span></span>
                <div class=" text-center text-neutral ">
                    <div class="max-w-md">
                        <LightSpeed left cascade><p className="text-4xl text-neutral font-normal">WELCOME TO</p></LightSpeed>
                        <LightSpeed left cascade><p className="mb-5 text-7xl text-neutral font-[900]">ELECTRI<LightSpeed left cascade><span className='text-primary'>X</span></LightSpeed></p></LightSpeed>
                        <p class="my-10 text-lg  font-semibold">Our product portfolio is comprised of the most trusted brands and we offering the finest customer service. We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
                        <Jump><p className="mt-2 flex text-[15px] text-slate-800 items-center px-10 font-bold"><CheckIcon className="w-6 h-6 mr-3 text-primary font-bold"></CheckIcon>Ground round tenderloin drumstick</p></Jump>
                        <Jump><p className="mt-2 flex text-[15px] text-slate-800 items-center px-10 font-bold"><CheckIcon className="w-6 h-6 mr-3 text-primary font-bold"></CheckIcon> Burgdoggen chuck pork loin</p></Jump>
                        <Jump><p className="mt-2 flex text-[15px] text-slate-800 items-center px-10 font-bold"><CheckIcon className="w-6 h-6 mr-3 text-primary font-bold"></CheckIcon>Venison t-bone alcatra bacon porch</p></Jump>
                        {/* <button class="btn btn-outline btn-primary btn-lg font-bold">About Us</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;