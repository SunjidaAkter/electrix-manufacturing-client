import React from 'react';


const OrderDeleteModal = ({ myOrder, refetch }) => {
    // const { _id } = myOrder;

    const deleteHandler = (id) => {
        console.log(id);
        const url = ` https://electrix-manufacturer-server.onrender.com/myOrder/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result?.acknowledged) {
                    refetch();
                }
            });
    };

    return (
        <div>
            <input
                type="checkbox"
                id="order-delete-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-extrabold text-lg text-error">
                        Are you sure you want to delete it? !
                    </h3>

                    <div className="modal-action">
                        <button
                            className="btn btn-error text-white"
                            onClick={() => deleteHandler(myOrder)}
                        >
                            Delete
                        </button>
                        <label
                            htmlFor="order-delete-modal"
                            className="btn btn-primary text-white"
                        >
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDeleteModal;
