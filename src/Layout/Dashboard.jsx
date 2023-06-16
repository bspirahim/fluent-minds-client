import { Link, Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Dashboard = () => {
    const { getRole } = useContext(AuthContext);
    return (
        <div>
            <Navber></Navber>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-4">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay bg-green-400"></label>
                    <ul className="menu p-4 w-64 h-full border-r-2  text-base-content ">
                        <li><Link to='/dashboard' className="text-lg  mb-2">Dashboard</Link></li>
                        {(getRole() == 'admin' || getRole() == 'instructor') && <><li><Link to='/dashboard/addclass' className="text-lg  mb-2">Add Class</Link></li>
                            <li><Link to='/dashboard/allclass' className="text-lg  mb-2">All Classes</Link></li></>}
                        {getRole() == 'admin' && <li><Link to='/dashboard/manageuser' className="text-lg  mb-2">Manage Users</Link></li>}
                        {(getRole() == 'user') && <li><Link to='/dashboard/myselectedclass' className="text-lg  mb-2">My Selected Class</Link></li>}{(getRole() == 'admin' || getRole() == 'user') &&
                            <li><Link to='/dashboard/paymenthistory' className="text-lg  mb-2">Payment History</Link></li>}
                    </ul>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;