import { createBrowserRouter, } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Components/Home";
import CreateGroups from "../Components/CreateGroups";
import AllGroups from "../Components/AllGroups";
import GroupDetails from "../Components/GroupDetails";
import MyGroups from "../Components/MyGroups";
import UpdateGroup from "../Components/UpdateGroup";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../Provider/PriveteRoute";

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
        element:<PrivateRoute><CreateGroups></CreateGroups></PrivateRoute>
    },
    
    {
        path:'groups',
        loader:()=>fetch('https://hobby-hub-server-tan.vercel.app/groups'),
        element:<PrivateRoute><AllGroups></AllGroups></PrivateRoute>
    },
    {
        path:'group/:id',
        loader: ({params})=>fetch(`https://hobby-hub-server-tan.vercel.app/groups/${params.id}`),
        Component: GroupDetails
    },
    {
        path:'myGroups',
       loader:()=>fetch('https://hobby-hub-server-tan.vercel.app/groups'),
        element:<PrivateRoute><MyGroups></MyGroups></PrivateRoute>
    },
    {
        path:'updateGroup/:id',
        loader: ({params})=>fetch(`https://hobby-hub-server-tan.vercel.app/groups/${params.id}`),
        Component: UpdateGroup
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
    {
        path:'*',
        Component:ErrorPage
    }
])
export default router