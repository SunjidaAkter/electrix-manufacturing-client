import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import ToolDeleteModal from './ToolDeleteModal';

const ManageProducts = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [orderDeleting, setOrderDeleting] = useState(null);



    const {
        isLoading,
        data: allTools,
        refetch,
    } = useQuery("ordersss", () =>
        fetch(
            `https://calm-bayou-08500.herokuapp.com/allProducts`,
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
                    Manage Tool
                </h1>
                <div className="pt-5  px-10 text-neutral">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra mb-10 w-7/12 mx-auto">
                            <thead>
                                <tr>
                                    <th className="">Index</th>
                                    <th className="">Tool Image</th>
                                    <th className="">Tool Title</th>
                                    <th className="">Available Quantity</th>
                                    <th className="">Unit Price</th>
                                    <th className="">Cancel</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allTools?.map((allTool, index) => <tr>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                                    <img src={allTool?.img} alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{allTool?.name}</td>
                                        <td>{allTool?.maxQuantity}</td>
                                        <td>${allTool?.price}</td>
                                        <th>
                                            <label
                                                disabled={allTool?.transactionId}
                                                onClick={() => setOrderDeleting(allTool._id)}
                                                htmlFor="order-delete-modal"
                                                className="btn btn-xs btn-error text-white"
                                            >
                                                Delete
                                            </label>
                                            {
                                                orderDeleting && (

                                                    <ToolDeleteModal
                                                        setOrderDeleting={setOrderDeleting}
                                                        allTool={orderDeleting}
                                                        refetch={refetch}
                                                    ></ToolDeleteModal>
                                                )
                                            }


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

export default ManageProducts;
{/*  */ }