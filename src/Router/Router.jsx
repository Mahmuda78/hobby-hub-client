import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Components/Home";
import CreateGroups from "../Components/CreateGroups";
import AllGroups from "../Components/AllGroups";
import GroupDetails from "../Components/GroupDetails";
import MyGroups from "../Components/MyGroups";
import UpdateGroup from "../Components/UpdateGroup";

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
        path:'groups',
        loader:()=>fetch('https://hobby-hub-server-tan.vercel.app/groups'),
        Component:AllGroups
    },
    {
        path:'group/:id',
        loader: ({params})=>fetch(`https://hobby-hub-server-tan.vercel.app/groups/${params.id}`),
        Component: GroupDetails
    },
    {
        path:'myGroups',
       loader:()=>fetch('https://hobby-hub-server-tan.vercel.app/groups'),
        Component: MyGroups
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
    
])
export default router