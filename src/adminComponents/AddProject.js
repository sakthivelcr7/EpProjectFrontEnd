import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProject() {
    const[values,setValues]=useState({
        pname:'',
        cname:'',
        duration:'',
        status:''
    })
    const navigate=useNavigate()
   const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/project',values)
            .then(res => {
                console.log(res);
                navigate('/admindash/project')
            })
            .catch(err => console.log(err))
    
   }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'> Add New Project</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='projectName'><strong>project Name :</strong> </label>
                        <input type='text' name='pname' className='form-control' placeholder='Enter project name' 
                        onChange={e=> setValues({...values,pname:e.target.value})}/>
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='Mobile'><strong>Client Name:</strong> </label>
                        <input type='text' name='cname' className='form-control' placeholder='Enter client name'
                         onChange={e=> setValues({...values,cname:e.target.value})}/>
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='email'><strong>Duration:</strong> </label>
                        <input type='text' name='duration' className='form-control' placeholder='Enter duration' 
                        onChange={e=> setValues({...values,duration:e.target.value})}/>
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='status'><strong>Status:</strong> </label>
                        <input type='text' name='status' className='form-control' placeholder='Enter status' 
                        onChange={e=> setValues({...values,status:e.target.value})}/>
                    </div>
                    <div className='pt-3'>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/admindash/project" className='btn btn-primary ms-3'>Back</Link>
                    </div>
                </form>

            </div>
            <Outlet/>
        </div>
    )
}

export default AddProject
