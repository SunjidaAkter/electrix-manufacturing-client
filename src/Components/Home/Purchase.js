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
    console.log(user.email);
    const { register, formState: { errors }, watch, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/currentTool/${id}`;
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
        const orderQuantity = data.orderQuantity;
        if (mobileNo && address && orderQuantity) {
            if (orderQuantity < tool?.minQuantity) {
                toast.error("You have to order minimun quantiy");
            } else if (orderQuantity > tool?.maxQuantity) {
                toast.error("We don't have that much stock");
            } else {
                const totalPrice = parseInt(data.orderQuantity) * parseInt(tool.price);
                const myOrder = {
                    name,
                    mobileNo,
                    address,
                    email,
                    orderQuantity,
                    img: tool?.img,
                    toolName: tool?.name,
                    price: tool?.price,
                    quantity: tool?.quantity,
                    totalPrice
                };

                fetch("http://localhost:5000/order", {
                    method: "POST",
                    body: JSON.stringify(myOrder),
                    headers: {
                        "content-type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((result) => {
                        if (result.acknowledged) {
                            toast.success("Your order has successfully submitted!");
                            e.target.reset();
                        }
                    });
            };
        } else {
            toast.error("Plese Fill Up this Form");
        }

    };
    return (
        <div className='px-12 flex lg:flex lg:flex-row flex-col w-full '>
            <div className='grid lg:w-1/2 w-full px-5 card bg-base-300 rounded-box place-items-center'>
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
            <div class="divider lg:divider-horizontal"><div class="rating gap-1"><input type="radio" name="rating-3" class="mask mask-heart bg-primary" /></div></div>
            <div className='grid lg:w-1/2 w-full card bg-base-300 rounded-box px-16'>
                <p className='mt-8 mb- font-extrabold text-primary text-5xl'>Order Details</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex justify-between'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                value={user.displayName}
                                readOnly
                                type="text"
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
                                value={user.email}
                                readOnly
                                name="email"
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input
                                name="address"
                                type="text"
                                placeholder="Where to Ship"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input
                                name="mobileNo"
                                type="text"
                                placeholder="Your Mobile Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("mobileNo", {
                                    required: {
                                        value: true,
                                        message: 'Mobile Number is Required'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.mobileNo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobileNo.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Order Quantity</span>
                        </label>
                        <input
                            name="orderQuantity"
                            type="number"
                            required
                            placeholder="Order quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("orderQuantity", {
                                required: {
                                    value: true,
                                    message: 'Order quantity is required'
                                }
                            })}
                        />
                        <label className="label">
                        </label>
                    </div>
                    <input className='btn bg-neutral w-full max-w-xs text-white' type="submit" value="ORDER" />
                </form>

            </div>
        </div>
    );
};

export default Purchase;
