import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MySelectedClassTable = ({item, index, handleDelete}) => {
    console.log(item)
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
            <Link to={`/class/${item.classID}`}><h2 className="card-title text-sm">{item.className}</h2></Link>
            </td>
            <td className='text-end'>${item.price}</td>
            <th>
            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-700 btn-md text-white mr-3"><FaTrashAlt></FaTrashAlt></button>
            </th>
        </tr>
    );
};

export default MySelectedClassTable;