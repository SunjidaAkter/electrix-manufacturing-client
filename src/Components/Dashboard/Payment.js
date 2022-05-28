import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
// yR@ArcwZ3uc+H%3

const stripePromise = loadStripe('pk_test_51L485xFE0t8jCtbzq0bFtqucXXj8HAVJwFiQaIZkklqrhNzE07j1irkucYfdy8atTtHCViFk23KMwZBmpqJkX6FE00xjmf8xSp');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/paymentOrder/${id}`;

    const { data: payOrder, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {payOrder.name}</p>
                    <h2 class="card-title">Please Pay for {payOrder.toolName}</h2>
                    <p>Please pay: ${payOrder.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payOrder={payOrder} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;