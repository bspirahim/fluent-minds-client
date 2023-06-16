import React from 'react';

const InstructorDisplay = ({ instructor }) => {
    const { name, email } = instructor;
    return (
        <div>
            <div className='text-center'>
                <img className='w-52 mx-auto border-2 border-green-400 rounded-full' src="/images/profile.png" alt="" />
                <div className='mt-5'>
                    <p>{name}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorDisplay;