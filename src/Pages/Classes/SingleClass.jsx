import { useLoaderData } from "react-router-dom";

const SingleClass = () => {
    const course = useLoaderData()
    console.log(course)
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

                            <button className="btn btn-primary rounded-full text-white px-5">Enroll Now</button>
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