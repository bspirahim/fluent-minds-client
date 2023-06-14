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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/classes',
        element: <Classes></Classes>,
        loader: () => fetch('http://localhost:5000/classes')
      },
      {
        path: 'class/:id',
        element: <SingleClass></SingleClass>,
        loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardContent></DashboardContent>
      },
      {
        path: '/dashboard/addclass',
        element: <AddClass></AddClass>
      },
    ]
  },
]);

export default router;