import React from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = ({ index, user, refetch }) => {
    const { name, email, role } = user;
    const makeAdmin = () => {
        fetch(`https://electrix-manufacturer-server.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                    refetch();
                }

            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name ? name : "Not Available"}</td>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <button class="btn btn-xs opacity-50">Already Admin</button>}</td>

        </tr>
    );
};

export default MakeAdmin;