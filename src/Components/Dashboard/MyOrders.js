import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrders = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [orderDeleting, setOrderDeleting] = useState(null);



    const {
        isLoading,
        data: myOrders,
        refetch,
    } = useQuery("orderss", () =>
        fetch(
            `https://calm-bayou-08500.herokuapp.com/myOrder?email=${user?.email}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        ).then((res) => res.json())
    );
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="bg-neutral bg-opacity-30 h-screen ">
            <div className="bg-neutral bg-opacity-30">
                <h1 className="text-3xl text-center font-semibold uppercase text-neutral pt-8 mb-3">
                    My Orders
                </h1>
                <div className="pt-5  px-10 text-neutral">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra mb-10 w-7/12 mx-auto">
                            <thead>
                                <tr>
                                    <th className="">Index</th>
                                    <th className="">Tool Info</th>
                                    <th className="">My Info</th>
                                    <th className="">Quantity</th>
                                    <th className="">Total Price</th>
                                    <th className="">Payment</th>
                                    <th className="">Delete</th>
                                    <th className="">Transaction ID</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myOrders?.map((myOrder, index) => <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src={myOrder?.img} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="font-bold">{myOrder?.toolName}</div>
                                                    <div class="text-sm opacity-50">Unit-price : ${myOrder?.price}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {myOrder?.name}
                                            <br />
                                            <span class="badge badge-ghost badge-sm">{myOrder?.address}</span>
                                        </td>
                                        <td>{myOrder?.orderQuantity}</td>
                                        <td>{myOrder?.totalPrice}</td>
                                        <th>
                                            {myOrder?.paid ? <p><span className='text-success'>Paid</span></p> : <button className="btn btn-sm btn-success" onClick={() => navigate(`/dashboard/payment/${myOrder?._id}`)}>Pay</button>}
                                        </th>
                                        <th>
                                            <label
                                                disabled={myOrder?.transactionId}
                                                onClick={() => setOrderDeleting(myOrder._id)}
                                                htmlFor="order-delete-modal"
                                                className="btn btn-xs btn-error text-white"
                                            >
                                                Delete
                                            </label>
                                            <OrderDeleteModal
                                                setOrderDeleting={setOrderDeleting}
                                                myOrder={orderDeleting}
                                                refetch={refetch}
                                            ></OrderDeleteModal>
                                        </th>
                                        <td>{myOrder?.transactionId ? myOrder?.transactionId : "Not Paid"}</td>
                                    </tr>


                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MyOrders;