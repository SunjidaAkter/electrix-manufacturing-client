
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Reviews.css'
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Bounce from 'react-reveal/Bounce';
// import LightSpeed from 'react-reveal/LightSpeed';
import StarRatings from "react-star-ratings";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(" https://electrix-manufacturer-server.onrender.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="reviews">
            <div className="back-g lg:py-12 py-12">
                <Bounce left cascade><p className="text-cyan-200 font-bold text-3xl text-center my-8">WHAT PEOPLE SAY ABOUT US</p></Bounce>
                <>
                    <Swiper
                        className="flex flex-col justify-center items-center"
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 6,
                            slideShadows: true,
                        }}
                        pagination={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review._id}>
                                <div class="flex justify-evenly items-center">
                                    <div class="ml-5 w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img className="rounded-full" src={review?.img} />
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-primary text-xl font-bold ml-1 lg:ml-5">{review?.firstName}</p>
                                        <p className="text-neutral text-lg font-bold ml-1 lg:ml-5">{review?.lastName}</p>
                                        <div className="  ml-1 lg:ml-5 mt-2 ">
                                            <StarRatings
                                                rating={Number(review?.ratings)}
                                                starRatedColor="#edc128"
                                                starDimension='15px'
                                                numberOfStars={5}
                                                name='rating'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-black italic font-semibold ">
                                    {review?.review.slice(0, 100)}...
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </div>
        </div>
    );
};


export default Reviews;