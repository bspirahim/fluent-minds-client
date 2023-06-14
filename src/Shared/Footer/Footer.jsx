import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#2C2828' }} className="">
               <footer className="footer p-0 py-10 mt-20  max-w-screen-lg mx-auto text-white shadow-2xl">
            <div>
                <img className="w-24" src="/logo.png" alt="" />
                <p>Fluent-Minds</p>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a className="link link-hover">Email: info@example.com</a>
                <a className="link link-hover">Phone: +1-123-456-7890</a>
                <a className="link link-hover">Address: Mirpur 10, Dhaka, Bangladesh</a>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <Link to='/'><a className="link link-hover">Home</a></Link>
                <Link to='/instructor'><a className="link link-hover">Instructors</a></Link>
                <Link to='/classes'><a className="link link-hover">Classes</a></Link>
            </div>
            <div className="md:pt-12">
                <p>@ copyright 2023, Fluent-Minds</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;