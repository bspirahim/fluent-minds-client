import InstructorHome from "../../Instructor/InstructorHome";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";
import Reviews from "../Revies/Reviews";
import Services from "../Services/Services";
import Marquee from 'react-fast-marquee';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PopularClasses sort="true" limit={6}></PopularClasses>
            <Features></Features>
            <div className='md:w-2/4 px-2 mx-auto text-center mt-16'>
                <h1 className='md:text-center md:text-3xl text-xl font-bold'>Popular Instructor</h1>
                <span className="w-20 h-1 bg-[#2ECC70] inline-block rounded-2xl"></span>
            </div>
            <Marquee>
            <InstructorHome limit={0}></InstructorHome>
            </Marquee>
            <Reviews></Reviews>
            
            
        </div>
    );
};

export default Home;