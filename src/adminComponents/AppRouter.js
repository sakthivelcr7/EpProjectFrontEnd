//appRouter
import React, { Component } from 'react';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Branch from './Branch';
//import Bran
import AddBranch from './AddBranch';
import EditBranch from './EditBranch';
import EmpTable from './EmpTable';
import AddEmp from './AddEmp';
import EditEmp from './EditEmp';
import ProjectTable from './ProjectTable';
import AddProject from './AddProject';
import EditProject from './EditProject';
import AdminDash from './AdminDash';
import Header from './Header';
import './Header.css';
import Sidebar from './Sidebar';
import LandPage from '../LandPage/LandPage';
import Home from '../LandPage/Home';
import About from '../LandPage/About';
import ContactComp from '../LandPage/ContactComp';
import Login from '../LandPage/Login';

import DashboardComp from './DashboardComp';
import UserDash from '../LandPage/UserDash';
import Protected from './Protected';



//import DeleteBranch from './DeleteBranch';


const AppRouter = () => {
    return (
        <div className='app-container'>
     
     <Routes>
     <Route path='userdash' element={<Protected Component={UserDash}/>}/>
      <Route path='/' element={<LandPage/>}>
                  <Route path="" element={<Home />} />
                  <Route path="home" element={<Home />} />
                   <Route path="about" element={<About />} />
                   <Route path="contact" element={<ContactComp />} />
                   <Route path="login" element={<Login />} /> 
                 
      </Route>
      <Route path='/admindash' element={<Protected Component={AdminDash}/>}>
                   <Route path='' element={<DashboardComp/>}/>
                   <Route path='branch' element={<Branch/>}/>
                   <Route path='create' element={<AddBranch/>}/>
                   <Route path='edit/:id' element={<EditBranch />} />
                  
                   <Route path='emp' element={<EmpTable/>}/>
                   <Route path='empcreate' element={<AddEmp/>}/>
                   <Route path='empedit/:id' element={<EditEmp />} />
                  
                    <Route path='project' element={<ProjectTable/>}/>
                   <Route path='projectcreate' element={<AddProject/>}/>
                   <Route path='projectedit/:id' element={<EditProject />} />
      </Route>

      
     </Routes>
      {/* <Header /> */}
        {/* <div className='content-container'>
           <div className='sidebar-container'>
            <Sidebar /> 
          </div>
  
        <div className='body-container'>
          
            <Routes>
                   <Route path='/' element={<LandPage/>}/>
                   <Route path="/home" element={<Home />} />
                   <Route path="/about" element={<About />} />
                   <Route path="/contact" element={<ContactComp />} />
                   <Route path="/login" element={<Login />} /> 
                   <Route path="/admin" element={<AppRouter />} />
                   <Route path='/admindash' element={<AdminDash/>}>
                   <Route path='branch' element={<Branch/>}/>
                   <Route path='create' element={<AddBranch/>}/>
                   <Route path='edit/:id' element={<EditBranch />} />
                  
                   <Route path='emp' element={<EmpTable/>}/>
                   <Route path='empcreate' element={<AddEmp/>}/>
                   <Route path='empedit/:id' element={<EditEmp />} />
                  
                    <Route path='project' element={<ProjectTable/>}/>
                   <Route path='projectcreate' element={<AddProject/>}/>
                   <Route path='projectedit/:id' element={<EditProject />} />
              </Route>
                   
              <Route path='admindash' element={<AdminDash/>}/>
                  
                   
            </Routes>
            
          </div>
        </div> */}
  
    </div>
    )
}

export default AppRouter
