//import logo from './logo.svg';

import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import LandPage from './LandPage/LandPage';
import AppRouter from './adminComponents/AppRouter';
//import Branch from './adminComponents/Branch';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardComp from './adminComponents/DashboardComp';

// import AdminDash from './adminComponents/AdminDash';
// import CustomNavbar from './adminComponents/newNav';
//import App from './adminComponents/App';





function App() {
  return (
   
    <div>
     
      
      <BrowserRouter>
        <AppRouter />
      
      </BrowserRouter>
      

      
     
    </div>
    
  );
}

export default App;
