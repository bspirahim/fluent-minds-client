import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Lottie from "lottie-react";
import reader from "../../public/login.json";
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    let from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true });
            toast.success('User Successfully login')
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left md:w-2/4">
                        <Lottie animationData={reader} loop={true} />
                    </div>
                    <div className="card md:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl ">Sign In</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary rounded-full text-white font-normal text-lg px-5" type="submit" value="Login" />
                            </div>
                            <p className='text-center'><small>New here? <Link to='/signup' className='text-primary' >Create a new account</Link></small> </p>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;