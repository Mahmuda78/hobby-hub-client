import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Components/Home";
import CreateGroups from "../Components/CreateGroups";

const router = createBrowserRouter([
    {
        path: '',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
        path:'createGroup',
        Component:CreateGroups
    }
        ]

    },
    {
        path: 'login',
        Component: Login
    },
    {
        path: 'register',
        Component: Register
    },
    
])
export default router