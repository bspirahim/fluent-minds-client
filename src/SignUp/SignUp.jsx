import Lottie from "lottie-react";
import reader from "../../public/login.json";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-2/4">
                        <Lottie animationData={reader} loop={true} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl ">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo url" className="input input-bordered rounded-full" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-full text-white font-normal text-lg px-5">Sign Up</button>
                                <small className="mt-4 text-center">Already have an account? <Link to='/login' className="text-primary">Please Sign in</Link></small>
                                <div className="text-center mt-4">
                                    <button className="btn btn-circle">
                                    <FaGoogle></FaGoogle>
                                    </button>
                                    <button className="btn btn-circle mx-4">
                                    <FaGithub></FaGithub>
                                    </button>
                                    <button className="btn btn-circle">
                                    <FaFacebook></FaFacebook>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;