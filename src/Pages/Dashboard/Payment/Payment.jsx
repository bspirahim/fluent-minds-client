import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const pay = useLoaderData()
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    console.log(pay)
    return (
        <div>
            <h1 className="text-center text-3xl mb-12 mt-12">Pay ${pay.price} for {pay.className}</h1>
            <div className='w-1/2 mx-auto text-center'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        pay={pay}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;