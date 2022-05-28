import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [orderDeleting, setOrderDeleting] = useState(null);
    const {
        isLoading,
        data: allOrders,
        refetch,
    } = useQuery("orderses", () =>
        fetch(
            `http://localhost:5000/allOrder`,
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
    const pendingHandler = (id) => {
        fetch(` http://localhost:5000/allOrder/${id}`, {
            method: "PUT",
            body: JSON.stringify({
                shipped: true,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then((result) => {
                refetch();
                console.log(result);
            });
    };
    return (
        <div className="bg-neutral bg-opacity-30 h-screen ">
            <div className="bg-neutral bg-opacity-30">
                <h1 className="text-3xl text-center font-semibold uppercase text-neutral pt-8 mb-3">
                    All Orders
                </h1>
                <div className="pt-5  px-10 text-neutral">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra mb-10 w-7/12 mx-auto">
                            <thead>
                                <tr>

                                    <th className="">Index</th>
                                    <th className="">Name</th>
                                    <th className="">Email</th>
                                    <th className="">Contact Number</th>
                                    <th className="">Tool Title</th>
                                    <th className="">Payment Status</th>
                                    <th className="">Shipping Status</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allOrders?.map((allOrder, index) => <tr>
                                        <th>{index + 1}</th>
                                        <td>{allOrder?.name}</td>
                                        <td>{allOrder?.email}</td>
                                        <td>{allOrder?.mobileNo}</td>
                                        <td>{allOrder?.toolName}</td>
                                        <th>
                                            {allOrder?.paid ? <p><span className='text-success'>Paid</span></p> : <p><span className='text-error'>Not Paid</span></p>}
                                        </th>
                                        <th>
                                            {allOrder?.shipped ? (
                                                <span className="text-success font-bold"> Shipped</span>
                                            ) : allOrder?.paid ? (
                                                <button
                                                    onClick={() => pendingHandler(allOrder?._id)}
                                                    className="btn btn-xs btn-primary text-white"
                                                >
                                                    pending
                                                </button>
                                            ) : (
                                                <span className="text-error font-bold">Unpaid</span>
                                            )}
                                        </th>
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

export default ManageOrders;