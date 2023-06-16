import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularClasses = ({limit}) => {

    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/classes?email&limit=${limit}`)
            .then(res => res.json())
            .then(data => setClasses(data));
    }, [])
    return (
        <div className='mt-20'>
            <h1 className='text-center font-bold text-3xl'>Popular Classes</h1>
            <div className='grid md:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-20 px-5'>
                {
                    classes.map(singleClass =>
                        <>

                            <div className="card w-auto bg-base-100 shadow-xl">
                                <figure><img src={singleClass.classImage} alt="Shoes" /></figure>
                                <p className='absolute right-0 top-2 me-3 px-2 bg-primary rounded-full'>${singleClass.price}</p>
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