import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const SingleClass = () => {
    const { user } = useContext(AuthContext)
    const params = useParams()
    const navigate = useNavigate()
    const [course, setCourse] = useState([])
    const { _id, classImage, className, price } = course;

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/classes/${params.id}?email=${user?.email}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                setCourse(data)
            })
    }, [user])

    const handleBooking = () => {
        const bookings = { classID: _id, userName: user?.displayName, userEmail: user?.email, classImage, className, price }
        fetch(`${import.meta.env.VITE_SERVER_URL}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Selected Class',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate("/dashboard/myselectedclass", { replace: true })
                }
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 rounded-lg max-w-screen-lg mx-auto my-20" style={parseInt(course.seats) - parseInt(course.enrolled) < 1 ? { backgroundColor: "red" } : {}}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={course.classImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="md:flex">
                        <div>
                            <h1 className="text-md font-bold">{course.className}</h1>
                            <p className="py-2">{course.instractorName}</p>
                            <p className="pb-2"> Available Seats: {parseInt(course.seats) - parseInt(course.enrolled)}</p>
                            <button disabled={(!course.isBooked && course.instractorEmail != user?.email && (parseInt(course.seats) - parseInt(course.enrolled)) > 0) ? false : true} onClick={handleBooking} className="btn btn-primary rounded-full text-white px-5 text-lg">Select</button>
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