import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Navber></Navber>}
            <Outlet/>
            {noHeaderFooter || <Footer></Footer>}
            <ToastContainer />
        </div>
    );
};

export default Main;