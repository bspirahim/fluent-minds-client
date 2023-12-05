import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import reader from "../../../../public/class.json";


const Banner = () => {
  return (
    <div className="bg-[#F0FFF0] md:h-[90vh]">
      <div className="md:flex justify-between items-center max-w-screen-lg mx-auto md:pt-24 pb-8 ">
        <div className="w-2/4">
          <p className="text-red-500">Are you ready to Learn?</p>
          <h1 className="text-4xl my-3 font-bold">Learn with fun <br />
            on <span className="text-[#2ECC71]">any Schedule</span></h1>
          <p className="py-2">In a world driven by constant innovation and the pursuit of knowledge, our minds are the key to unlocking limitless potential. Welcome to Fluent Minds, where the power of language and communication transcends boundaries and opens doors to new opportunities.</p>
          <Link to="/classes"><button className="btn btn-primary rounded-full text-white font-normal text-lg my-4">Get Started</button></Link>
        </div>
        <div className="w-3/5">
        <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;