import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const HomeLayout = () => {
    return (
        <div className=''>
           <Header></Header>
           <div className=''><Outlet></Outlet></div>
           <Footer></Footer>
          
        </div>
    );
};

export default HomeLayout;