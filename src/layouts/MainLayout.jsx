import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Loading from '../pages/Loading';
import MyContainer from '../component/MyContainer';

const MainLayout = () => {
    const {state} =useNavigation();
    return (
        <div>
            <MyContainer>
                <Navbar></Navbar>
            
            {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
            
            <Footer></Footer>

            </MyContainer>
            
        </div>
    );
};

export default MainLayout;