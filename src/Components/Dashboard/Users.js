import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import MakeAdmin from './MakeAdmin';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('userCollection', () => fetch('https://electrix-manufacturer-server.onrender.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    console.log(users);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="bg-opacity-30 h-screen ">
            <div className="bg-neutral bg-opacity-30">
                <h1 className="text-3xl text-center font-semibold uppercase text-neutral pt-8 mb-3">
                    make an admin
                </h1>
                <div className="pt-5  px-10 text-neutral">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra mb-10 w-7/12 mx-auto">
                            <thead>
                                <tr>
                                    <th className="">Index</th>
                                    <th className="">Name</th>
                                    <th className="">Email</th>
                                    <th className="">Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <MakeAdmin
                                        key={user._id}
                                        index={index}
                                        user={user}
                                        refetch={refetch}
                                    ></MakeAdmin>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Users;