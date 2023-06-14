import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllClassTable from './AllClassTable';
import Swal from 'sweetalert2';

const AllClass = () => {
    const data = useLoaderData()
    const [classes, setClasses] = useState(data)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/classes/${item._id}`, {
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                      const remaining = classes.filter(cls => cls._id !== item._id);
                      setClasses(remaining);
                }
              })
            }
          })
        }




    return (
        <div>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px]'>
                <h3 className='text-3xl'>Total Classes: {classes.length}</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            classes.map((item, index) => <AllClassTable
                             key={item._id}
                             item={item}
                             index={index}
                             handleDelete={handleDelete}
                            >

                            </AllClassTable>    )

                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllClass;

