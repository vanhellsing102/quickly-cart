import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Root = () => {
    const location = useLocation();
    // console.log(location.pathname);
    return (
        <div>
            {
                (location.pathname !== "/login" && location.pathname !== "/register") &&
                <Navbar></Navbar>
            }
            <div className={`${(location.pathname !== "/login" && location.pathname !== "/register") && 'px-4 md:px-12'}`}>
                <Outlet></Outlet>
            </div>
            {
                (location.pathname !== "/login" && location.pathname !== "/register") &&
                <Footer></Footer>
            }
        </div>
    );
};

export default Root;