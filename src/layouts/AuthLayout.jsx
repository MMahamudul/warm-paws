import React from 'react';
import Navbar from '../component/Navbar';
import MyContainer from '../component/MyContainer';
import Signin from '../pages/Signin';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

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
                <footer>
                    <Footer></Footer>
                </footer>

            </div>
            
        </MyContainer>
    );
};

export default AuthLayout;