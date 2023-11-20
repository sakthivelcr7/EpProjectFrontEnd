import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddBranch() {
    const[values,setValues]=useState({
        branchName:'',
        location:'',
        sector:''
    })
    const navigate=useNavigate()
   const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/branch',values)
            .then(res => {
                console.log(res);
                navigate('/admindash/branch')
            })
            .catch(err => console.log(err))
    
   }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'> Add a Branch</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='BranchName'><strong>Branch Name :</strong> </label>
                        <input type='text' name='branchName' className='form-control' placeholder='Enter branch name' 
                        onChange={e=> setValues({...values,branchName:e.target.value})}/>
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='Location'><strong>Location:</strong> </label>
                        <input type='text' name='location' className='form-control' placeholder='Enter Location'
                         onChange={e=> setValues({...values,location:e.target.value})}/>
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='sector'><strong>Sector:</strong> </label>
                        <input type='text' name='sector' className='form-control' placeholder='Enter Sector' 
                        onChange={e=> setValues({...values,sector:e.target.value})}/>
                    </div>
                    <div className='pt-3'>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/admindash/branch" className='btn btn-primary ms-3' >Back</Link>
                    </div>
                </form>

            </div>

            <Outlet/>
        </div>
    )
}

export default AddBranch
