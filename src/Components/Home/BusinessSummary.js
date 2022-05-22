import React from 'react';
import countries from '../../Assets/coronavirus.png'
import briefing from '../../Assets/briefing.png'
import favourite from '../../Assets/favourite.png'
import rating from '../../Assets/rating.png'

const BusinessSummary = () => {
    return (
        <div className=''>
            <div class="lg:px-8 px-24 stats stats-vertical lg:stats-horizontal shadow">

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <img src={countries} alt="" />
                    </div>
                    <div>
                        <div class="w-full flex justify-center font-light  lg:stat-value text-neutral text-base lg:text-6xl ">72</div>
                        <div class="stat-title text-primary font-thin text-xs lg:text-4xl font-bold">Countries</div>

                    </div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <img src={briefing} alt="" />
                    </div>
                    <div>
                        <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl ">500+</div>
                        <div class="stat-title text-primary font-thin text-xs lg:text-4xl font-bold">Complete<br />Projects</div>

                    </div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <img src={rating} alt="" />
                    </div>
                    <div>
                        <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl ">245+</div>
                        <div class="stat-title text-primary font-thin text-xs lg:text-4xl font-bold">Happy<br />Clients</div>

                    </div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary">
                        <img src={favourite} alt="" />
                    </div>
                    <div>
                        <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl ">454+</div>
                        <div class="stat-title text-primary font-thin text-xs lg:text-4xl font-bold">Reviews</div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default BusinessSummary;