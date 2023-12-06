import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#000000' }} className="py-12">
            <footer className="footer p-0 py-12   max-w-screen-lg mx-auto text-white ">
                <div className="w-24 mx-auto">
                    <img className="" src="/logo.png" alt="" />
                    <p>Fluent-Minds</p>
                </div>
                <div className=" w-2/4 mx-auto ">
                    <span className="footer-title">Links</span>
                   <div className="flex md:flex-col ">
                   <Link  className="link link-hover mr-2" to='/'>Home</Link>
                    <Link className="link link-hover mr-2" to='/instructor'>Instructors</Link>
                    <Link className="link link-hover mr-2" to='/classes'>Classes</Link>
                   </div>
                </div>
                <div className="w-2/4 mx-auto">
                    <div className="footer-title text-center block">Contact</div>
                    <a className="link link-hover">Email: info@example.com</a>
                    <a className="link link-hover">Phone: +1-123-456-7890</a>
                    <a className="link link-hover">Address: Mirpur 10, Dhaka, Bangladesh</a>
                </div>
                <div className="md:pt-12 w-2/4 mx-auto text-center">
                    <p>@Copyright 2023, Fluent-Minds</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;