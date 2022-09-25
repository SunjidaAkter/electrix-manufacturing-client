import React from 'react';
import countries from '../../Assets/coronavirus.png'
import briefing from '../../Assets/briefing.png'
import favourite from '../../Assets/favourite.png'
import rating from '../../Assets/rating.png'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


const BusinessSummary = () => {
    return (
        <div className='mb-12'>
            <Bounce left cascade><p className='mt-12  text-neutral font-extrabold text-center lg:text-5xl text-3xl'>BILLIONS BUSINESS BELIEVE US </p></Bounce>
            <Bounce right cascade><p className='mb-12 text-neutral opacity-70 font-semibold text-center lg:text-3xl text-xl'>We understand customers expectation</p></Bounce>

            <div class="w-full flex justify-center">
                <div class="lg:pl-12 lg:pr-8 px-12 stats stats-vertical lg:stats-horizontal shadow-xl">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={countries} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light  lg:stat-value text-neutral font-num text-base lg:text-6xl ">
                                <CountUp end={19} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                {/* <CountUp end={500} duration={5} suffix=" +"></CountUp> */}
                            </div>
                            <div class="stat-title text-primary lg:font-bold font-normal text-xs lg:text-4xl font-bold">Countries</div>

                        </div>
                    </div>

                    {/* <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={briefing} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl font-num">
                                <VisibilitySensor partialVisibility offset={{ top: 670 }}>
                                    {({ isVisible }) => (
                                        <div >
                                            {isVisible ? null : <CountUp end={500} duration={5} suffix=" +" />}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                            <div class="stat-title lg:font-bold text-primary font-normal text-xs lg:text-4xl font-bold">Complete<br />Projects</div>

                        </div>
                    </div> */}

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={rating} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl font-num">
                                <CountUp end={30} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                {/* <CountUp end={245} duration={5} suffix=" +"></CountUp> */}
                            </div>
                            <div class="stat-title lg:font-bold text-primary font-normal text-xs lg:text-4xl font-bold">Happy<br />Clients</div>

                        </div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <img src={favourite} alt="" />
                        </div>
                        <div>
                            <div class="w-full flex justify-center font-light lg:stat-value text-neutral text-base lg:text-6xl font-num">
                                <CountUp end={70} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                {/* <CountUp end={454} duration={5} suffix=" +"></CountUp> */}
                            </div>
                            <div class="stat-title lg:font-bold text-primary font-normal text-xs lg:text-4xl font-bold">Reviews</div>

                        </div>
                    </div>



                </div>

            </div>
            <div className='my-5 w-full flex justify-center items-center'>
                <div class="px-12 w-[70%] flex justify-center items-center h-full card lg:card-side bg-base-100 shadow-2xl">
                    <div>
                        <Fade bottom cascade><p className='mt-3 font-bold text-neutral text-center lg:text-left lg:text-5xl text-4xl'>Have any question?</p></Fade>
                        <Fade bottom cascade><p className='font-bold text-primary text-center lg:text-left lg:text-3xl text-2xl'>Don't hesitate to ask</p></Fade>
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