import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log();

        const firstName = data.firstName;
        const lastName = data.lastName;
        const img = data.img;
        const ratings = data.ratings;
        const review = data.review;

        const myReview = {
            firstName,
            lastName,
            img,
            ratings,
            review
        };

        fetch("http://localhost:5000/review", {
            method: "POST",
            body: JSON.stringify(myReview),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.acknowledged) {
                    toast.success("The review has been added correctly!");
                    e.target.reset();
                }
            });

    };
    return (
        <div className="hero min-h-screen bg-neutral bg-opacity-20" >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className='flex w-3/4 h-screen justify-center items-center'>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Give Your Review</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">First Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your First Name"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: 'First Name is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstName.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Last Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your Last Name"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            {...register("lastName", {
                                                required: {
                                                    value: true,
                                                    message: 'Last Name is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Image URL</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Image URL"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            {...register("img", {
                                                required: {
                                                    value: true,
                                                    message: 'Image URL is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                        </label>
                                    </div>

                                </div>
                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">How much stars do you want to give for service</span>
                                        </label>
                                        <select required className='select select-primary select-bordered w-full max-w-xs mb-5' {...register("ratings")}>
                                            <option disabled selected value="ratings">Stars</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <div className="form-control w-full max-w-xs ">
                                        <label className="label">
                                            <span className="text-neutral label-text">Give your review</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Review"
                                            className="textarea textarea-primary h-36"
                                            {...register("review", {
                                                required: {
                                                    value: true,
                                                    message: 'Review is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                                        </label>
                                    </div>


                                </div>
                            </div>

                            <div className='flex w-full justify-center my-6'>
                                <input className='btn bg-neutral w-full max-w-xs text-white block' type="submit" value="Add Review" />
                            </div>
                        </form>


                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddReview;