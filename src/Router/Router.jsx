import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path:'',
        Component:HomeLayout,
    
    },
    {
        path: 'login',
        Component:Login
    },
    {
        path:'register',
        Component:Register
    }
])
export default router