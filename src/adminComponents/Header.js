 // Header.js

import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { SiChai } from "react-icons/si";

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-and-text'>
        <SiChai className='icon' />
        <h6>Company Management</h6>
      </div>
      
      <div className='header-right'>
        <span className='admin-text'>
          Admin<BsPersonCircle className='icon mr-2' />
        </span>
      </div>
    </header>
  );
};

export default Header;