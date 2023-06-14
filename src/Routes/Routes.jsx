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
        path: '/addclass',
        element: <AddClass></AddClass>
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
]);

export default router;