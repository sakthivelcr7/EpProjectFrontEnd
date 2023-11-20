import React from 'react'
import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const Sidebar = () => {
  return (
    <aside id="sidebar"  >
     
      <ul  className='sidebar-list'>
        
      <li className='sidebar-list-item'>
                  <Link to={``} className='btn'>Dashboard</Link>
        </li>
        <li className='sidebar-list-item'>
                  
                  <Link to={`branch`}  className='btn'>Branch</Link>
        </li>
        <li className='sidebar-list-item'>
               
                  <Link to={`emp`}  className='btn'>Employee</Link>
        </li>
        <li className='sidebar-list-item'>
                
                  <Link to={`project`}  className='btn'>project</Link>
        </li>
        <li className='sidebar-list-item'>
                
                {/* <Link to={`/`}  className='btn'>Log out</Link> */}
                <Logout selectedOption={"user"}></Logout>
      </li>




      </ul>
    </aside>
    
   
  )
}

export default Sidebar