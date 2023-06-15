import React from 'react';
import Lottie from "lottie-react";
import reader from "/public/error-page.json";
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='w-2/4 mx-auto text-center'>
            <Lottie animationData={reader} loop={true} />
            <p className='fw-bold fs-4 text-red-600'>Sorry! this page doesn't exists</p>
            <div className='flex justify-center items-center text-blue-700 mt-2'>
            <span className=''><Link to='/'>Go Back To Home  </Link></span>
            <span><FaAngleRight></FaAngleRight></span>
            </div>
        </div>
    );
};

export default ErrorPage;