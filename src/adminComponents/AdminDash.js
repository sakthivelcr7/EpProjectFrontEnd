import React from 'react';
//import './Frame.css';
// import DashboardComp from './DashboardComp';
import { Link, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar';
import Header from './Header';



function AdminDash() {
  return (
    <div>


      <Header />
      <div className='content-container'>
        <div className='sidebar-container'>
          <Sidebar />
        </div>

        <div className='body-container'>

          <Outlet />


        </div>
      </div>
    </div>
  );
}

export default AdminDash;
