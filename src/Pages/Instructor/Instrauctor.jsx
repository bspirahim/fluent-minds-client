import React, { useEffect, useState } from 'react';
import InstructorDisplay from './InstructorDisplay';

const Instrauctor = ({ limit }) => {

    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER_URL}/users?getInstructor=true&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])

    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10 max-w-screen-lg mx-auto mt-20'>
                {
                    instructors.map(instructor => <InstructorDisplay
                        key={instructor._id}
                        instructor={instructor}
                    >

                    </InstructorDisplay>)
                }
            </div>
        </div>
    );
};

export default Instrauctor;