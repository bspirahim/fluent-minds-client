import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const pay = useLoaderData()
    console.log(pay)
    return (
        <div>
            <h1>payment</h1>
        </div>
    );
};

export default Payment;