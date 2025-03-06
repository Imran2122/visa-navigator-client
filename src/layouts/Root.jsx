import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import App from '../App';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div>
            {/* header */}
         <Navbar></Navbar>
         
            <Outlet/>
            {/* footer */}
            <footer className='mt-auto'>
            <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;
