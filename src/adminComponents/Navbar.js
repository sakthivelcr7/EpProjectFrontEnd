import React from 'react'
import { Link } from 'react-router-dom'
import DashboardComp from './DashboardComp'
import Branch from './Branch'
import EmpTable from './EmpTable'
import ProjectTable from './ProjectTable'

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to="/" element={DashboardComp}>Dashboard</Link></li>
                <li><Link to="/branch" element={Branch}>Branch</Link></li>
                <li><Link to="/emp" element={EmpTable}>Employees</Link></li>
                <li><Link to="/project" element={ProjectTable}>Project</Link></li>
                <li></li>
               
            </ul>
        </div>
    )
}

export default Navbar
