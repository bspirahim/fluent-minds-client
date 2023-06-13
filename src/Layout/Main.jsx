import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Main;