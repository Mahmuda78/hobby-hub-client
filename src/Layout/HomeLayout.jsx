import React from 'react';
import Header from '../Components/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from "../Pages/Loading";
const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div className=''>
           <Header></Header>
           <div className=''>
            {state=="loading"? <Loading/> : <Outlet></Outlet>}</div>
           <Footer></Footer>
          
        </div>
    );
};

export default HomeLayout;