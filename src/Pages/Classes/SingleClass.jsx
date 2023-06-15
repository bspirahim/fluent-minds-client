import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SingleClass = () => {
    const { user } = useContext(AuthContext)
    const course = useLoaderData()
    const { _id, classImage, className, price, instractorName, seats } = course;

    const handleBooking = () => {
        const bookings = { classID: _id, userName:user?.displayName, userEmail:user?.email,  classImage, className, price }
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className="hero bg-base-200 max-w-screen-lg mx-auto my-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={course.classImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="md:flex">
                        <div>
                            <h1 className="text-md font-bold">{course.className}</h1>
                            <p className="py-2">{course.instractorName}</p>
                            <p className="pb-2"> Available Seats: {course.seats}</p>

                            <button onClick={handleBooking} className="btn btn-primary rounded-full text-white px-5 text-lg">Select</button>
                        </div>
                        <div>
                            <p className="md:ms-24 font-bold">${course.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;