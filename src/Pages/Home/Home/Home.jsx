import Instrauctor from "../../Instructor/Instrauctor";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularClasses sort="true" limit={6}></PopularClasses>
            <h1 className='text-center font-bold text-3xl'>Popular Instructors</h1>
            <Instrauctor limit={6}></Instrauctor>
        </div>
    );
};

export default Home;