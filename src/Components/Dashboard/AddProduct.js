import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { signOut } from "firebase/auth";
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [formLoading, setFormLoading] = useState(false);
    const imageStorageKey = "cbcb95a71e416a31c591f202b6c54668";
    const onSubmit = async data => {
        setFormLoading(true);
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        maxQuantity: data.maxQuantity,
                        minQuantity: data.minQuantity,
                        img: img
                    }

                    fetch('http://localhost:5000/adminTool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                setFormLoading(false);
                                reset();
                                toast.success('Tool added successfully')
                            }
                            else {
                                toast.error('Failed to add the tool');

                            }
                        })

                }

            })
    }

    if (formLoading) {
        return <Loading />;
    }


    return (
        <div className="hero min-h-screen bg-neutral bg-opacity-20" >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className='flex w-3/4 h-screen justify-center items-center'>
                <div className="card w-full bg-base-100 shadow-2xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Add A Tool</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Price</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Enter price"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            {...register("price", {
                                                required: {
                                                    value: true,
                                                    message: 'Price is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Available Quantity</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Available Quantity"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            {...register("maxQuantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Available Quantity is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.maxQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.maxQuantity.message}</span>}
                                        </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Minimum quantity for sale</span>
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Minimum quantity"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            {...register("minQuantity", {
                                                required: {
                                                    value: true,
                                                    message: 'Minimum Quantity is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                                        </label>
                                    </div>

                                </div>
                                <div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="text-neutral label-text">Tool Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Tool Name"
                                            className="input input-primary input-bordered w-full max-w-xs"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Tool name is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>

                                    <div className="form-control w-full max-w-xs ">
                                        <label className="label">
                                            <span className="text-neutral label-text">Tool Description</span>
                                        </label>
                                        <textarea
                                            type="text"
                                            placeholder="Tool Description"
                                            className="textarea textarea-primary h-36"
                                            {...register("description", {
                                                required: {
                                                    value: true,
                                                    message: 'Tool Description is Required'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                        </label>
                                    </div>


                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="text-neutral label-text">Image</span>
                                    </label>
                                    <input
                                        type="file"
                                        placeholder="Enter Image"
                                        className="input input-primary input-bordered w-full max-w-xs"
                                        {...register("img", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                                    </label>
                                </div>
                            </div>

                            <div className='flex w-full justify-center my-6'>
                                <input className='btn bg-neutral w-full max-w-xs text-white block' type="submit" value="Add TOOL" />
                            </div>
                        </form>


                    </div>
                </div>
            </div >
        </div>
    );
};



//   const [formLoading, setFormLoading] = useState(false);
//   const onSubmit = (data) => {
//     setFormLoading(true);
//     const image = data.image[0];
//     const formData = new FormData();
//     formData.append("image", image);
//     const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`;
//     fetch(url, {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.success) {
//           const doctorImg = result.data.image.url;
//           const doctor = {
//             name: data.name,
//             availableQuantity: parseInt(data.availableQuantity),
//             orderQuantity: parseInt(data.orderQuantity),
//             perPartsPrice: parseInt(data.perPartsPrice),
//             description: data.description,
//             img: doctorImg,
//           };

//           fetch("https://tranquil-earth-82270.herokuapp.com/tool", {
//             method: "POST",
//             headers: {
//               "content-type": "application/json",
//               authorization: `Bearar ${localStorage.getItem("accessToken")}`,
//             },
//             body: JSON.stringify(doctor),
//           })
//             .then((res) => res.json())
//             .then((data) => {
//               if (data.insertedId) {
//                 setFormLoading(false);
//                 reset();
//                 toast.success("Product added successfully");
//               } else {
//                 toast.error("Failed to add Product");
//               }
//             });
//         }
//       });
//   };
//   if (formLoading) {
//     return <Spinner />;
//  }








//     <div className="bg-secondary  py-8 h-full">
//       <div className="px-5 bg-secondary pb-10">
//         <div className="w-full md:w-7/12 lg:w-5/12  mx-auto bg-accent p-4  rounded-lg">
//           <h1 className="text-center text-2xl font-semibold uppercase font-koulen  pt-2 pb-5 text-primary">
//             Add a Product
//           </h1>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="flex gap-5">
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Product Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   className="input input-bordered w-full "
//                   {...register("name", {
//                     required: {
//                       value: true,
//                       message: "Name is required!",
//                     },
//                   })}
//                 />
//                 {errors.name?.type === "required" && (
//                   <span className="label-text-alt text-red-600 mt-1 pl-1">
//                     {errors.name?.message}
//                   </span>
//                 )}
//               </div>
//               <div className="form-control flex-1">
//                 <label className="label">
//                   <span className="label-text">Available Quantity</span>
//                 </label>
//                 <input
//                   type="number"
//                   className="input input-bordered w-full "
//                   {...register("availableQuantity", {
//                     required: {
//                       value: true,
//                       message: "Max-Qauntity is required!",
//                     },
//                   })}
//                 />
//                 {errors.availableQuantity?.type === "required" && (
//                   <span className="label-text-alt text-red-600 mt-1 pl-1">
//                     {errors.availableQuantity?.message}
//                   </span>
//                 )}
//               </div>
//             </div>
//             <div className="flex gap-5">
//               <div className="form-control flex-1 ">
//                 <label className="label">
//                   <span className="label-text">Min-Quantity</span>
//                 </label>
//                 <input
//                   type="number"
//                   className="input input-bordered w-full "
//                   {...register("orderQuantity", {
//                     required: {
//                       value: true,
//                       message: "Min-Qauntity is required!",
//                     },
//                   })}
//                 />
//                 {errors.orderQuantity?.type === "required" && (
//                   <span className="label-text-alt text-red-600 mt-1 pl-1">
//                     {errors.orderQuantity?.message}
//                   </span>
//                 )}
//               </div>
//               <div className="form-control flex-1 ">
//                 <label className="label">
//                   <span className="label-text">Per Unit Price</span>
//                 </label>
//                 <input
//                   type="number"
//                   className="input input-bordered w-full "
//                   {...register("perPartsPrice", {
//                     required: {
//                       value: true,
//                       message: "Min-Qauntity is required!",
//                     },
//                   })}
//                 />
//                 {errors.perPartsPrice?.type === "required" && (
//                   <span className="label-text-alt text-red-600 mt-1 pl-1">
//                     {errors.perPartsPrice?.message}
//                   </span>
//                 )}
//               </div>
//             </div>
//             <textarea
//               name="description"
//               className="textarea block mx-auto resize-none bg-white text-accent h-32 w-full  mt-5 textarea-primary focus:outline-none  font-koulen"
//               placeholder="Add product description"
//               {...register("description", {
//                 required: {
//                   value: true,
//                   message: "description is required!",
//                 },
//               })}
//             ></textarea>
//             {errors.description?.type === "required" && (
//               <span className="label-text-alt text-red-600 mt-1 pl-1">
//                 {errors.description?.message}
//               </span>
//             )}

//             <div className="mt-5 ">
//               <input
//                 type="file"
//                 className=" text-md file:text-accent file:mr-10  file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-gray-300 hover:file:bg-gray-400 text-gray-500"
//                 {...register("image", {
//                   required: {
//                     value: true,
//                     message: "Image is required!",
//                   },
//                 })}
//               />
//               {errors.image?.type === "required" && (
//                 <span className="label-text-alt text-red-600 mt-1  pl-1">
//                   {errors.image?.message}
//                 </span>
//               )}
//             </div>

//             <input
//               type="submit"
//               value="Add Product"
//               className="btn  btn-primary w-full mt-5 text-white uppercase"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//     );
// };


export default AddProduct;