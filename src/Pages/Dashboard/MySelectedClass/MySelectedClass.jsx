import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MySelectedClassTable from './MySelectedClassTable';

const MySelectedClass = () => {
    const myClasses = useLoaderData()
    console.log(myClasses)
    return (
        <div>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px]'>
                <h3 className='text-3xl'>My Selected Classes: {myClasses.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className='text-center'>Class</th>
                            <th className='text-center'>Class Name</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            myClasses.map((item, index) => <MySelectedClassTable
                                key={item._id}
                                item={item}
                                index={index}
                            >

                            </MySelectedClassTable>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;