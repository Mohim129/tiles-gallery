import React from 'react';
import Navbar from '../component/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;