import React from 'react';
import Navbar from '../component/Navbar';
import MyContainer from '../component/MyContainer';
import Signin from '../pages/Signin';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <MyContainer>
            <div className='min-h-screen'>
                <header>
                <Navbar></Navbar>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>

            </div>
            
        </MyContainer>
    );
};

export default AuthLayout;