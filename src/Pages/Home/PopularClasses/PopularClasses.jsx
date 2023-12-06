import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularClasses = ({ limit }) => {

    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/classes?email&limit=${limit}&sort=true`)
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    return (
        <div className='mt-20'>
             <div className='md:w-2/4 px-2 mx-auto text-center'>
                <h1 className='md:text-center md:text-3xl text-xl font-bold'>Popular Classes</h1>
                <span className="w-20 h-1 bg-[#2ECC70] inline-block rounded-2xl"></span>
            </div>
            <div className='grid md:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-20 px-5'>
                {
                    classes.map(singleClass =>
                        <>

                            <div className="card w-auto bg-base-100 shadow-xl">
                                <figure><img src={singleClass.classImage} alt="Shoes" /></figure>
                                <p className='absolute right-0 top-2 me-3 px-2 bg-[#2ECC70] rounded-full'>${singleClass.price}</p>
                                <div className="card-body">
                                    <Link to={`/class/${singleClass._id}`}><h2 className="card-title text-sm">{singleClass.className}</h2></Link>
                                    <small>Instructor: {singleClass.instractorName}</small>
                                    <small>Available Seats: {(parseInt(singleClass.seats) - parseInt(singleClass.enrolled))}</small>
                                </div>
                            </div>
                        </>


                    )
                }
            </div>
        </div>
    );
};

export default PopularClasses;