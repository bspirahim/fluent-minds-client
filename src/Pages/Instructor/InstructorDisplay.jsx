import React from 'react';

const InstructorDisplay = ({ instructor }) => {
    const { name, email } = instructor;
    return (
        <div>
            <div className='text-center p-2'>
                <img className='w-52 mx-auto border-2 border-[#F9AE39] rounded-full' src={instructor?.photoURL} alt="" />
                <div className='mt-5'>
                    <p className='font-bold'>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorDisplay;