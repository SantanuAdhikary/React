import React from 'react';
import { Outlet } from 'react-router-dom';

import '../App.css'
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
