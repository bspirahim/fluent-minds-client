import Instrauctor from "../../Instructor/Instrauctor";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <PopularClasses sort="true" limit={6}></PopularClasses>
            <h1 className='text-center font-bold text-3xl'>Popular Instructors</h1>
            <Instrauctor limit={6}></Instrauctor>
            <Features></Features>
        </div>
    );
};

export default Home;