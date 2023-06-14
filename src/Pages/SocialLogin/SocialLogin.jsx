import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase/firebase.config';

const SocialLogin = ({ from }) => {
    const auth = getAuth(app)
    const navigate = useNavigate()

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('logged in');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="text-center mt-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle">
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
    );
};

export default SocialLogin;