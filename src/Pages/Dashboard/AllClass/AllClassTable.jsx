import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllClassTable = ({item, index, handleDelete}) => {

    
    return (
        <tr>
            <th>
                <label>
                    {
                        index + 1
                    }
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>
                {item.className}
            </td>
            <td className='text-end'>${item.price}</td>
            <th>
                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-700 btn-md text-white mr-3"><FaTrashAlt></FaTrashAlt></button>

               <Link to={`/updateclass/${item._id}`}> <button className="btn btn-ghost bg-sky-700 btn-md text-white"><FaPencilAlt></FaPencilAlt></button></Link>
            </th>
        </tr>
    );
};

export default AllClassTable;