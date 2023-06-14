import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const DashboardContent = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2 className='text-center text-3xl mt-20'>Welcome Back, {user?.displayName} </h2>
        </div>
    );
};

export default DashboardContent;