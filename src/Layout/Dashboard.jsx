import { Link, Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";


const Dashboard = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 h-full border-r-2 text-base-content">
                    <li><Link to='/dashboard/addclass' className="text-lg">Add Class</Link></li>  
                    <li><Link to='/dashboard/allclass' className="text-lg">All Class</Link></li>  
                    <li><Link to='/dashboard/myselectedclass' className="text-lg">My Selected Class</Link></li>  
                    </ul>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;