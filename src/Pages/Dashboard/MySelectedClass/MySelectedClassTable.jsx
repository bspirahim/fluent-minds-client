import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MySelectedClassTable = ({ item, index, handleDelete }) => {
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
                <Link to={`/class/${item.classID}`}><h2 className="card-title text-sm">{item.className}</h2></Link>
            </td>
            <td>${item.price}</td>
            <td>{item?.paid != "Paid" ? "Pending" : "Done"}</td>
            <th>
                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-700 btn-md text-white mr-3"><FaTrashAlt></FaTrashAlt></button>
                {item?.paid != "Paid" && <Link to={`/dashboard/payment/${item._id}`}> <button className="btn btn-ghost bg-sky-700 btn-md text-white mr-3">Pay</button></Link>}
            </th>
        </tr>
    );
};

export default MySelectedClassTable;