import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Loading from '../pages/Loading';

const MainLayout = () => {
    const {state} =useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;