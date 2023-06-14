import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#2C2828' }} className="">
            <footer  className="footer py-10 text-white max-w-screen-lg mx-auto">
                <div>
                    <img className="w-28" src="/logo.png" alt="" />
                    <p>Fluent-Minds</p>
                </div>
                <div>
                    <span className="footer-title">Menu</span>
                    <li><Link to='/' className="link link-hover">Home</Link></li>
                    <li><Link to='/' className="link link-hover">Instructors</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>
                </div>
                <div>
                    <p>Copyright @Fluent-Minds</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;