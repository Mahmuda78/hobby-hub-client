import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Components/Home";

const router = createBrowserRouter([
    {
        path: '',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
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
    }
])
export default router