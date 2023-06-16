import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllClassTable = ({ item, index, handleDelete }) => {
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
            <td><Link to={`/class/${item._id}`}><h2 className='font-bold'>{item.className}</h2></Link></td>
            <td className='text-'>{item.instractorName}</td>
            <td className='text-'>${item.price}</td>
            <th>
                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-700 btn-md text-white"><FaTrashAlt></FaTrashAlt></button>
                <Link to={`/dashboard/updateclass/${item._id}`}> <button className="btn btn-ghost bg-sky-700 btn-md text-white"><FaPencilAlt></FaPencilAlt></button></Link>
            </th>
        </tr>
    );
};

export default AllClassTable;