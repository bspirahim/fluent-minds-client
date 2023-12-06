import React from 'react';

const Services = () => {
    return (
        <div className='mt-12 p-3'>
            <div className='md:w-2/4 px-2 mx-auto text-center'>
                <h1 className='md:text-center md:text-3xl text-xl font-bold'>Our Best Services</h1>
                <span className="w-20 h-1 bg-[#2ECC70] inline-block rounded-2xl"></span>
                <p className='mt-2'>Discover excellence with our premier online courses. Elevate your skills through expert-led modules, interactive content, and personalized support. Join a thriving learning community and embark on a transformative educational journey for success.</p>

            </div>
            <div className="md:grid grid-cols-4 gap-4 items-center max-w-screen-lg mx-auto mt-12 ">
                <div className="text-center h-full">
                    <div className='w-[100px] h-[100px] border-[#F9AE39] mx-auto border-2 rounded-full'>
                        <div className='w-24 h-24 bg-[#2ECC70] p-1 rounded-full flex items-center '>
                            <img className="w-24 p-6 mx-auto" src="/images/service_icon/icon_01.png" alt="" />
                        </div>
                    </div>
                    <div className="my-3">
                        <p className="text-lg font-bold pb-1">Professional Courses</p>
                        <p className='text-sm'>Elevate your career with our top-tier Professional Courses. Expert-led, practical, and tailored for success. Join now</p>
                    </div>
                </div>
                <div className="text-center h-full">
                    <div className='w-[100px] h-[100px] border-[#F9AE39] mx-auto border-2 rounded-full'>
                        <div className='w-24 h-24 bg-[#2ECC70] p-1 rounded-full flex items-center '>
                            <img className="w-24 p-6 mx-auto" src="/images/service_icon/icon_02.png" alt="" />
                        </div>
                    </div>
                    <div className="my-3">
                        <p className="text-lg font-bold pb-1">Experienced Instructors</p>
                        <p className='text-sm'> Our experienced instructors bring real-world expertise to your online courses, ensuring you learn from the best in the field.</p>
                    </div>
                </div>
                <div className="text-center h-full">
                    <div className='w-[100px] h-[100px] border-[#F9AE39] mx-auto border-2 rounded-full'>
                        <div className='w-24 h-24 bg-[#2ECC70] p-1 rounded-full flex items-center '>
                            <img className="w-24 p-6 mx-auto" src="/images/service_icon/icon_03.png" alt="" />
                        </div>
                    </div>
                    <div className="my-3">
                        <p className="text-lg font-bold pb-1">Practical Traning</p>
                        <p className='text-sm'>Our practical training ensures hands-on experience for immediate impact. Dive into industry-focused courses and gain the expertise needed to excel in your field.</p>
                    </div>
                </div>
                <div className="text-center h-full">
                    <div className='w-[100px] h-[100px] border-[#F9AE39] mx-auto border-2 rounded-full'>
                        <div className='w-24 h-24 bg-[#2ECC70] p-1 rounded-full flex items-center '>
                            <img className="w-24 p-6 mx-auto" src="/images/service_icon/icon_04.png" alt="" />
                        </div>
                    </div>
                    <div className="my-3">
                        <p className="text-lg font-bold pb-1">Validated Certificated</p>
                        <p className='text-sm'>Validate your skills, certify your success. Our recognized certificates elevate your profile, proving your expertise with confidence.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;