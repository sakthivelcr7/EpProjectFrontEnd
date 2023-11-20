// import React from 'react';
// import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import './LandPage.css';
// import Login from './Login';
// import About from './About';
// import ContactComp from './ContactComp';
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
// import UserDash from '../UserDash';
// import AppRouter from '../adminComponents/AppRouter';
// import Home from './Home';
// //new imports
// //import AddBranch from './AddBranch';
// //import EditBranch from './EditBranch';
// //import EmpTable from './EmpTable';

// import Branch from '../adminComponents/Branch';
// import AddBranch from '../adminComponents/AddBranch';
// import EditBranch from '../adminComponents/EditBranch';
// import EmpTable from '../adminComponents/EmpTable';
// import AddEmp from '../adminComponents/AddEmp';
// import EditEmp from '../adminComponents/EditEmp';
// import ProjectTable from '../adminComponents/ProjectTable';
// import AddProject from '../adminComponents/AddProject';
// import EditProject from '../adminComponents/EditProject';
// import DashboardComp from '../adminComponents/DashboardComp';
// import AdminDash from '../adminComponents/AdminDash';


// const LandPage = () => {
//   return (
//     <Router>
//       <div className='card'>
//         <div className='card-header bg-dark text-white d-flex justify-content-between align-items-center'>
//           <div className="logo text-white text-decoration-none fs-4">Beast Technologies</div>
//           <div className="header-right">
//             <Link to='/' className='btn btn-outline-light mx-2'>Home</Link>
//             <Link to="/about" className='btn btn-outline-light mx-2'>About</Link>
//             <Link to="/contact" className='btn btn-outline-light mx-2'>Contact</Link>
//             <Link to="/login" className='btn btn-outline-light mx-2'>Login</Link>
//           </div>
//         </div>
//         <div className='card-body h-100px'>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<ContactComp />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/admin" element={<AdminDash />}>
               
//             <Route path='/branch' element={<Branch/>}/>
//                    <Route path='/create' element={<AddBranch/>}/>
//                    <Route path='/edit/:id' element={<EditBranch />} />
                  
//                    <Route path='/emp' element={<EmpTable/>}/>
//                    <Route path='/empcreate' element={<AddEmp/>}/>
//                    <Route path='/empedit/:id' element={<EditEmp />} />
                  
//                     <Route path='/project' element={<ProjectTable/>}/>
//                    <Route path='/projectcreate' element={<AddProject/>}/>
//                    <Route path='/projectedit/:id' element={<EditProject />} />  
//             </Route>
//             {/* Add other routes */}
//           </Routes>
//         </div>
//         <div className='card-footer bg-dark text-white'>
//           <div className='footer-right'>
//             <FaFacebook className='icon text-white mx-2' />
//             <FaTwitter className='icon text-white mx-2' />
//             <FaLinkedin className='icon text-white mx-2' />
//             <FaGithub className='icon text-white mx-2' />
//           </div>
//           <div className='footer-left'>
//             <p>©2023 Beast Technologies. All Rights Reserved</p>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default LandPage;



import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from 'react-router-dom';
import './LandPage.css';
import Login from './Login';
import About from './About';
import ContactComp from './ContactComp'; // Import ContactComp
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, } from 'react-icons/fa';

import AppRouter from '../adminComponents/AppRouter';
import Home from './Home';




 

const LandPage = () => {
  return (
    
  
      <div className='card'>
        <div className='card-header bg-dark text-white d-flex justify-content-between align-items-center'>
          <div className="logo text-white text-decoration-none fs-4">Beast Technologies</div>
          <div className="header-right">
            <Link to='/home' className='btn btn-outline-light mx-2'>Home</Link>
            <Link to="/about" className='btn btn-outline-light mx-2'>About</Link>
            <Link to="/contact" className='btn btn-outline-light mx-2'>Contact</Link>
            <Link to="/login" className='btn btn-outline-light mx-2'>Login</Link>
          </div>
        </div>
        <div className=' card-body-1 h-100px'>
           {/* <Routes>
                   <Route path="/home" element={<Home />} />
                   <Route path="/about" element={<About />} />
                   <Route path="/contact" element={<ContactComp />} />
                   <Route path="/login" element={<Login />} />
           </Routes> */}
           <Outlet/>
        </div>
        <div className='card-footer bg-dark text-white'>
          <div className='footer-right'>
          <a href="https://www.facebook.com/Changepond?mibextid=9R9pXO" target="_blank" rel="noopener noreferrer">
            <FaFacebook className='icon text-white mx-2' />
            </a>
            <FaTwitter className='icon text-white mx-2' />
            <a href="https://www.linkedin.com/company/changepond/" target="_blank" rel="noopener noreferrer">
               <FaLinkedin className='icon text-white mx-2' />
           </a>
           <a href="https://instagram.com/changepond?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
               <FaInstagram className='icon text-white mx-2' />
            </a>


            <FaGithub className='icon text-white mx-2' />
          </div>
          <div className='footer-left'>
            <p>©2023 Beast Technologies. All Rights Reserved</p>
          </div>
        </div>
      </div>
  
   
  );
};

export default LandPage;





