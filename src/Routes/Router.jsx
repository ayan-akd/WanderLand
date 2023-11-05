import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddBlog from "../Pages/AddBlog";
import PrivateRoute from "./PrivateRoute";
import AllBlogs from "../Pages/AllBlogs";
import Wishlist from "../Pages/Wishlist";
import Featured from "../Pages/Featured";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: "/add",
          element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
        },
        {
          path: "/blogs",
          element: <AllBlogs></AllBlogs>
        },
        {
          path: "/wishlist",
          element: <Wishlist></Wishlist>,
        },
        {
          path: "/featured",
          element: <Featured></Featured>
        }
      ],
    },
  ]);
  
  export default Router;