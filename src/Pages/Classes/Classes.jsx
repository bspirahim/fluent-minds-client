
import { Link, useLoaderData } from 'react-router-dom';

const Classes = () => {
    const classes = useLoaderData()
    return (
        <div className='grid md:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-12 p-4'>
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
    );
};

export default Classes;