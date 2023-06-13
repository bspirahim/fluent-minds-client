import { Link } from "react-router-dom";

const Navber = () => {

    const navOptions = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
    </>
    return (
        <div className="bg-[#F0FFF0] ">
            <div className="navbar max-w-screen-lg mx-auto p-0 m-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="flex items-center normal-case text-xl">
                        <img className="w-12" src="/logo.png" alt="" />
                        Fluent-Minds
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-2 text-black  text-lg font-bold">
                            {navOptions}
                        </ul>
                    </div>
                   <Link to='login'> <button className="btn btn-primary rounded-full text-white font-normal text-lg my-4 px-5">Sign In</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;