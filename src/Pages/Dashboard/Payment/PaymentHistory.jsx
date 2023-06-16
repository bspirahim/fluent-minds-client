import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [myPaymentHistory, setMyPaymentHistory] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?getPaid=true&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyPaymentHistory(data))
    }, [])


    return (
        <div>
            <div className='uppercase font-semibold flex justify-evenly items-center h-[60px]'>
                <h3 className='text-3xl'>Payment History:</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myPaymentHistory.map((pd) => <>
                                <tr>
                                    <td><Link to={`/classes/${pd.classID}`}><h2 className="card-title text-sm">{pd.className}</h2></Link></td>
                                    <td>{pd.price}</td>
                                    <td>{pd.transactionId}</td>
                                    <td>{pd.paid}</td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;