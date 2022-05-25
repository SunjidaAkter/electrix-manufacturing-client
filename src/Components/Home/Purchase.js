import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [reload, setReload] = useState(false);
    const [tool, setTool] = useState({});
    let [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setTool(data));
    }, [id, reload]);

    if (loading) {
        return <Loading ></Loading>;
    }
    const onSubmit = (data, e) => {
        console.log();

        const name = data.name;
        const email = data.email;
        const mobileNo = data.mobileNo;
        const address = data.address;
        const orderQuanttity = data.orderQuanttity;
        // const vehicleStatus = event.target.vehicleStatus;
        const myOrder = {
            name,
            mobileNo,
            address,
            email,
            orderQuanttity,
        };

        fetch("http://localhost:5000/item", {
            method: "POST",
            body: JSON.stringify(myOrder),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.acknowledged) {
                    toast("The product has been added correctly!");
                    e.target.reset();
                }
            });
    };
    return (
        <div className='px-12 flex flex-col w-full lg:flex-row'>
            <div className='grid flex-grow card bg-base-300 rounded-box place-items-center'>
                <div className='pb-5 my-5 shadow-2xl rounded-lg border-inherit bg-white'>
                    <div className='flex justify-center '>
                        <img className='w-9/12 rounded ' src={tool?.img} alt="" />
                    </div>
                    <div className="px-12">
                        <h2 className="text-primary text-4xl mt-8 font-bold pt-2">{tool?.name}</h2>
                        <div className='flex justify-around items-center '>
                        </div>
                        <p className=" mb-8 "><b><span className='text-secondary font-medium text-xl'>Per-unit price : ${tool?.price}</span></b> </p>
                        <p className=""><b><span className='text-neutral text-xl'>Description :</span></b> <span className='text-primary text-xl text-cyan-900 font-bold'>{tool?.description}</span></p>
                        <p className=""><b><span className='text-neutral text-xl'>Available Quantity :</span></b> <span className='text-primary text-xl text-cyan-900 font-bold'>{tool?.maxQuantity}</span></p>
                        <p className="mb-4"><b><span className='text-neutral text-xl'>Minimum Quantity :</span></b> <span className='text-primary text-xl text-cyan-900 font-bold'>{tool?.minQuantity}</span></p>
                    </div>
                </div>
            </div>
            <div class="divider lg:divider-horizontal">OR</div>
            <div className='grid flex-grow card bg-base-300 rounded-box px-16'>
                <p className='mt-8 mb- font-extrabold text-primary text-5xl'>Order Details</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex justify-between'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="form-control w-2/5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-2/5 max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <input className='btn bg-neutral w-full max-w-xs text-white' type="submit" value="SIGN IN" />
                </form>

            </div>
        </div>
    );
};

export default Purchase;
{/* <div className='flex justify-between'>
    <div className=''>
        <span class="label-text"><small>User name</small></span>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-sm" />
    </div>
    <div className=''>
        <span class="label-text"><small>User mail</small></span>
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-sm" />
    </div>
</div>

<div className=''>
    <span class="label-text"><small>User phone number</small></span>
    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-sm" />
</div>
<div className=''>
<span class="label-text">What is your name?</span>
<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-sm" />
</div>
<div className=''>
<span class="label-text">What is your name?</span>
<input type="text" placeholder="Type here" class="input input-bordered w-full max-w-sm" />

</div> */}