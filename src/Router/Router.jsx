import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Components/Home";
import CreateGroups from "../Components/CreateGroups";
import AllGroups from "../Components/AllGroups";
import GroupDetails from "../Components/GroupDetails";

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
    },
    
    {
        path:'/groups',
        loader:()=>fetch('http://localhost:5000/groups'),
        Component:AllGroups
    },
    {
        path:'/group/:id',
        loader: ({params})=>fetch(`http://localhost:5000/groups/${params.id}`),
        Component: GroupDetails
    },
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