import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logout from '../adminComponents/Logout';

function UserDash(){
	
	
	const [employeeDetails, setEmployeeDetails] = useState({});
  const loggedInEmployeeName = sessionStorage.getItem("user"); // Replace this with the actual logged-in employee's name

  useEffect(() => {
    // Fetch employee details based on the logged-in employee's name
    axios.get(`http://localhost:3000/employee?name=${loggedInEmployeeName}`)
      .then((response) => {
        const [employee] = response.data;
        setEmployeeDetails(employee);
      })
      .catch((error) => {
        console.error('Error fetching employee details:', error);
      });
  }, [loggedInEmployeeName]);
    return(
        <div>
            <header className="container-fluid bg bg-info" style={{"height":"10vh",fontSize:27}}>
                
                <div className="row">
                    <div className="col-md-2">
                        <div style={{"paddingLeft":10,"paddingTop":20}}>Beast Technologies</div>
                    </div>
                    <div className="col-md-10">
                    <div className="text-end" style={{"paddingRight":10,"paddingTop":20}}>Welcome, {employeeDetails.name} <Logout selectedOption={"user"}></Logout></div>
                    
                    </div>
                </div>
                
            </header>
            <div className="container-fluid bg bg-secondary d-flex align-items-center" style={{ height: "80vh" }}>
                <div className="card mx-auto" style={{ width: "40%", height:"80%" }}>
                    <div className="card-header text-center fw-bolder" style={{fontSize:30}}>{employeeDetails.name}</div>
                    <div className="card-body" style={{fontSize:30}}>
                    Employee ID: {employeeDetails.id}
                    <hr />
                    Employee mobile: {employeeDetails.mobile}
                    <hr />
                    Employee email: {employeeDetails.email}
                    <hr />
                    {/* Employee Address: vivekanandar theru,<br/>Central Bus stand,<br/>,Dubai mainroad<br/>Dubai */}
                    <div className="row">
                            <div className="col-md-4">
                                Employee Address:
                            </div>
                            <div className="col-md-8">
                            {employeeDetails.address}
                            </div>
                    </div>
                    </div>
                </div>
            </div>

            <footer className="container-fluid bg bg-info text-center pt-3" style={{"height":"10vh",fontSize:12}}>copywrighted to beast technologies</footer>
        </div>
    )
}

export default UserDash;