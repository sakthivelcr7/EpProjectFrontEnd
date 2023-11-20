import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DashboardComp() {
  const [branchCount, setBranchCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  // Hardcoded company details
  const ceoName = "Raj";
  const founderName = "Ramachandran";
  const cfoName = "Vignesh";

  useEffect(() => {
    fetchData('branch', setBranchCount);
    fetchData('employee', setEmployeeCount);
    fetchData('project', setProjectCount);
  }, []);

  const fetchData = async (endpoint, setCount) => {
    try {
      const response = await axios.get(`http://localhost:3000/${endpoint}`);
      setCount(response.data.length);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container">
      {/* Row 1 */}
      <div className="row mb-3">
        <div className="col-10">
          <div className="row">
            <div className="col-4 shadow" style={{ height: '200px' }}>
              <div className='card h-100'>
                <div className='card-header'>Branch Count</div>
                <div className='card-body text-white' style={{ backgroundColor: '#553f75' }}>
                  <h1 className="display-4">{branchCount}</h1>
                </div>
              </div>
            </div>

            <div className="col-4 shadow" style={{ height: '200px' }}>
              <div className='card h-100'>
                <div className='card-header'>Employee Count</div>
                <div className='card-body text-white' style={{ backgroundColor: '#553f75' }}>
                  <h1 className="display-4">{employeeCount}</h1>
                </div>
              </div>
            </div>

            <div className="col-4 shadow" style={{ height: '200px' }}>
              <div className='card h-100'>
                <div className='card-header'>Project Count</div>
                <div className='card-body text-white ' style={{ backgroundColor: '#553f75' }}>
                  <h1 className="display-4">{projectCount}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row vh-40">
        <div className="col-10">
          <div className="row">
            <div className="col-4 shadow" style={{ height: '200px' }}>
              <div className='card h-100'>
                <div className='card-header'>CEO Name</div>
                <div className='card-body text-white' style={{ backgroundColor: '#553f75' }}>
                  <h2 className="display-6">{ceoName}</h2>
                </div>
              </div>
            </div>

            <div className="col-4 shadow" style={{ height: '200px' }}>
              <div className='card h-100'>
                <div className='card-header'>Founder Name</div>
                <div className='card-body text-white' style={{ backgroundColor: '#553f75' }}>
                 <h2 className="display-6">{founderName}</h2>
                </div>
              </div>
            </div>

            <div className="col-4 shadow" style={{ height: '200px' }}>
              <div className='card h-100'>
                <div className='card-header'>CFO Name</div>
                <div className='card-body text-white' style={{ backgroundColor: '#553f75' }}>
                  <h2 className="display-6">{cfoName}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComp;
