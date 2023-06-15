import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';

const SocialLogin = ({ jwt }) => {
    const { signInGoogle } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                jwt(result)
            })
            .catch(error => {
                toast.error(error.message);
            });
    }
    return (
        <div>
            <div className="text-center mt-4">
                <button type='button' onClick={handleGoogleSignIn} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;