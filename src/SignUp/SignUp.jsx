import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Lottie from "lottie-react";
import reader from "../../public/login.json";
import { toast } from 'react-toastify';
import SocialLogin from '../Pages/SocialLogin/SocialLogin';
import useLogin from '../hooks/useLogin';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const from = '/';

    const [LoginInfo, setLoginInfo] = useState({
        email: null,
        name: null,
        role: 'user',
        insert: false
    });

    useLogin(LoginInfo);

    const jwt = (result, insert = true) => {
        setLoginInfo({
            email: result.user.email,
            name: result.user.displayName,
            role: 'user',
            insert,
        }); setTimeout(() => {
            toast("Signup success!");
            navigate(from, { replace: true });
        }, 1000);

    }
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        reset()
                        jwt(result);
                    })
                    .catch(error => {
                        toast.error(error.message);
                    });
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-2/4">
                        <Lottie animationData={reader} loop={true} />
                    </div>
                    <div className="card md:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-3xl ">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered rounded-full" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered rounded-full" />
                                {errors.photoUrl && <span className='text-red-600'>Photo Url is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered rounded-full" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered rounded-full" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 Cherectar</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less 20 Cherecter</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must have one upper case, one lower case, one number and one special cherecter </p>}

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary  rounded-full text-white font-normal text-lg px-5" type="submit" value="Sign Up" />
                            </div>
                            <p className='text-center'><small>Already Registerd? <Link to='/login' className='text-primary' >Please Sign in</Link></small> </p>
                            <SocialLogin jwt={jwt}></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;