import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Features = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
     <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
         <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-700 via-30% to-[#28AF60] to-90%">
          <div className="bg-center bg-cover h-auto py-16 pb-24 bg-no-repeat"
        style={{ backgroundImage: 'url("/images/Photos/featuresbg.png")' }}
        >
         <div className="md:grid grid-cols-4 gap-4 max-w-screen-lg mx-auto text-center">
         <div className="text-center py-5">
                <img className="w-20 mx-auto" src="/images/ICON/book.png" alt="" />
                <div className="my-3 text-white">
                    <p className="text-2xl font-bold pb-1 ">
                    {counterOn && <CountUp start={0} end={1500} duration={2} delay={0}></CountUp>}
                        + Topic</p>
                    <p>Learn Anythings</p>
                </div>
            </div>
            <div className="text-center py-5">
                <img className="w-24 mx-auto" src="/images/ICON/Student.png" alt="" />
                <div className="my-3 text-white">
                    <p className="text-2xl font-bold pb-1">
                    {counterOn && <CountUp start={0} end={1800} duration={2} delay={0}></CountUp>}+ Students</p>
                    <p>Learn Anythings</p>
                </div>
            </div>
            <div className=" text-center py-5">
                <img className="w-24 mx-auto" src="/images/ICON/Test.png" alt="" />
                <div className="my-3 text-white">
                    <p className="text-2xl font-bold pb-1">
                    {counterOn && <CountUp start={0} end={9} duration={2} delay={0}></CountUp>}K+ Test Token</p>
                    <p>Learn Anythings</p>
                </div>
            </div>
            <div className=" text-center py-5">
                <img className="w-24 mx-auto" src="/images/ICON/courses.png" alt="" />
                <div className="my-3 text-white">
                    <p className="text-2xl font-bold pb-1">
                    {counterOn && <CountUp start={0} end={1000} duration={2} delay={0}></CountUp>}+ Courses</p>
                    <p className="">Learn Anythings</p>
                </div>
            </div>

              </div>

        </div>
      </div>
     </ScrollTrigger>
    );
};

export default Features;