import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';


const MainLayout = ({ children }) => {
    return (
      <div>
        
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;