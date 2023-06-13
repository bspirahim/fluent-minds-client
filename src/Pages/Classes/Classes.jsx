import { key } from "localforage";
import { useLoaderData } from "react-router-dom";

const Classes = () => {
    const classes = useLoaderData()
    console.log(classes)
    return (
        <div>
            {
                classes.map(singleClass =>
                    <div 
                    key = {singleClass._id}
                    >
                        
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={singleClass.classImage} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-2xl font-bold">{singleClass.className}</h1>
                                    <p className="py-6">Available Seats:{singleClass.seats}</p>
                                    <p className="py-6">Price:{singleClass.price}</p>
                                    <button className="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }
        </div >
    );
};

export default Classes;