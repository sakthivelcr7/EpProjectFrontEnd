import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddEmp() {
    const[values,setValues]=useState({
        name:'',
        mobile:'',
        email:'',
        address:'',
        pass:''
    })
    const navigate=useNavigate()
   const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/employee',values)
            .then(res => {
                console.log(res);
                navigate('/admindash/emp')
            })
            .catch(err => console.log(err))
    
   }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'> Add Employee</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor='empName'><strong>Emp Name :</strong> </label>
                        <input type='text' name='name' className='form-control' placeholder='Enter emp name' 
                        onChange={e=> setValues({...values,name:e.target.value})}/>
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='Mobile'><strong>Mobile:</strong> </label>
                        <input type='text' name='mobile' className='form-control' placeholder='Enter mobile no'
                         onChange={e=> setValues({...values,mobile:e.target.value})}/>
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='email'><strong>Email:</strong> </label>
                        <input type='text' name='email' className='form-control' placeholder='Enter email' 
                        onChange={e=> setValues({...values,email:e.target.value})}/>
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='email'><strong>Address:</strong> </label>
                        <input type='text' name='address' className='form-control' placeholder='Enter address' 
                        onChange={e=> setValues({...values,address:e.target.value})}/>
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='password'><strong>Password:</strong> </label>
                        <input type='password' name='pass' className='form-control' placeholder='Enter password' 
                        onChange={e=> setValues({...values,pass:e.target.value})}/>
                    </div>
                    <div className='pt-3'>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/admindash/emp" className='btn btn-primary ms-3' >Back</Link>
                    </div>
                </form>

            </div>
            <Outlet/>
        </div>
    )
}

export default AddEmp
