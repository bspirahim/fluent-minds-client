import Instrauctor from "../../Instructor/Instrauctor";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import PopularClasses from "../PopularClasses/PopularClasses";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <PopularClasses limit={6}></PopularClasses>
            <Instrauctor limit={6}></Instrauctor>
        </div>
    );
};

export default Home;