import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Classes/AddClass";
import SingleClass from "../Pages/Classes/SingleClass";
import Dashboard from "../Layout/Dashboard";
import DashboardContent from "../Pages/Dashboard/DashboardContent";
import AllClass from "../Pages/Dashboard/AllClass/AllClass";
import UpdateClass from "../Pages/Dashboard/AllClass/UpdateClass";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Instructor from "../Pages/Instructor/Instructor";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/instructor',
        element: <Instructor limit={0}></Instructor>
      },
      {
        path: '/classes',
        element: <Classes limit={0}></Classes>,
        loader: () => fetch(`${import.meta.env.VITE_SERVER_URL}/classes`)
      },
      {
        path: 'class/:id',
        element: <SingleClass></SingleClass>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  },

  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardContent></DashboardContent>
      },
      {
        path: '/dashboard/addclass',
        element: <AddClass></AddClass>
      },
      {
        path: '/dashboard/updateclass/:id',
        element: <UpdateClass></UpdateClass>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/classes/${params.id}`)
      },
      {
        path: '/dashboard/allclass',
        element: <AllClass></AllClass>,
      },
      {
        path: '/dashboard/myselectedclass',
        element: <MySelectedClass></MySelectedClass>,
        loader: () => fetch(`${import.meta.env.VITE_SERVER_URL}/bookings`)
      },
      {
        path: '/dashboard/manageUser',
        element: <ManageUser></ManageUser>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/bookings/${params.id}`)
      },
      {
        path: '/dashboard/paymenthistory',
        element: <PaymentHistory />
      }


    ]
  },
]);

export default router;