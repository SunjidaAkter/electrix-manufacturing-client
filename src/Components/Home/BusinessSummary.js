import React from 'react';
import countries from '../../Assets/coronavirus.png'
import briefing from '../../Assets/briefing.png'
import favourite from '../../Assets/favourite.png'
import rating from '../../Assets/rating.png'

const BusinessSummary = () => {
    return (
        <div className='mb-12'>
            <p className='mt-12  text-accent font-extrabold text-center lg:text-5xl text-3xl'>BILLIONS BUSINESS BELIEVE US </p>
            <p className='mb-12 text-secondary font-semibold text-center lg:text-3xl text-xl'>We understand customers expectation</p>

            <div class="w-full flex justify-center">
                <div class="lg:pl-12 lg:pr-8 px-24 stats stats-vertical lg:stats-horizontal shadow-xl">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={countries} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light  lg:stat-value text-neutral text-base lg:text-6xl ">72</div>
                            <div class="stat-title text-primary lg:font-bold font-normal text-xs lg:text-4xl font-bold">Countries</div>

                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={briefing} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl ">500+</div>
                            <div class="stat-title lg:font-bold text-primary font-normal text-xs lg:text-4xl font-bold">Complete<br />Projects</div>

                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={rating} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl ">245+</div>
                            <div class="stat-title lg:font-bold text-primary font-normal text-xs lg:text-4xl font-bold">Happy<br />Clients</div>

                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={favourite} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl ">454+</div>
                            <div class="stat-title lg:font-bold text-primary font-normal text-xs lg:text-4xl font-bold">Reviews</div>

                        </div>
                    </div>



                </div>

            </div>
            <div className='my-5 w-full flex justify-center items-center'>
                <div class="p-12 w-11/12 flex justify-center items-center h-full card lg:card-side bg-base-100 shadow-2xl">
                    <div>
                        <p className='mt-3 font-bold text-neutral text-center lg:text-left lg:text-5xl text-4xl'>Have any question?</p>
                        <p className='font-bold text-primary text-center lg:text-left lg:text-3xl text-2xl'>Don't hesitate to ask</p>
                    </div>
                    {/* <div class="card-body">

                    </div> */}
                    <div class="card-body ">
                        <div class="card justify-end">
                            <button class=" PX-8 w-3/2 btn btn-primary text-white">REQUEST FOR QUOTE</button>
                        </div>

                        <div class="card justify-end">
                            <button class=" px-8 w-3/2 btn btn-neutral">CONTACT US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;