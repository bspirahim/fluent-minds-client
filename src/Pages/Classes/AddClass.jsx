import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
    const {user} = useContext(AuthContext)

    const handleClass = event =>{
        event.preventDefault()
        const form = event.target;
        const className = form.className.value;
        const classImage = form.classImage.value;
        const instractorName = user.displayName;
        const instractorEmail = user.email;
        const seats = form.seats.value;
        const price = form.price.value;

        const classes = {
            className,
            classImage,
            instractorName,
            instractorEmail,
            seats,
            price,
            enrolled:0
        }

        fetch('http://localhost:5000/class', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(classes)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Class successfully added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                form.reset();
            }
        })
    } 
    return (
        <div>
             <div className='mt-10 mb-20 container mx-auto w-3/4'>
            <h1 className='text-start text-3xl my-5 font-bold'>Add Class</h1>
            <form onSubmit={handleClass}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name='className' className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text"  name='classImage' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" name='seats' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price </span>
                        </label>
                        <input type="text" name='price'  className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className='btn btn-primary text-white' value="Save" />
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddClass;