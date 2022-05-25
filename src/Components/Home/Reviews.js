
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Reviews.css'
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(" https://calm-bayou-08500.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="reviews">
            <div className="back-g lg:py-12 py-12">
                <p className="text-accent font-bold text-3xl text-center my-8">WHAT PEOPLE SAY ABOUT US</p>
                <>
                    <Swiper
                        className=""
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
                                <div class="avatar">
                                    <div class="ml-5 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review?.img} />
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-primary text-xl font-bold ml-1 lg:ml-5">{review?.firstName}</p>
                                        <p className="text-black text-lg font-bold ml-1 lg:ml-5">{review?.lastName}</p>
                                        <div className="flex justify-start my-2 ml-1 lg:ml-5 mb-2">
                                            <p className=" ml-1 lg:ml-5 font-bold text-2xl text-orange-400">{review?.ratings}</p>
                                            <div class="mt-1 ml-1 lg:ml-1 rating">
                                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-black my-5">
                                    {review?.review}

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