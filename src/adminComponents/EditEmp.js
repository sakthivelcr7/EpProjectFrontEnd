import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditEmp = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({
        id: "",
        branchName: "",
        location: "",
        sector: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/employee/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    const inputHandler = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const updateProduct = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:3000/employee/${id}`, product)
            .then(() => {
                window.alert("employee details updated successfully");
                nav("/admindash/emp");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
   
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'>Update Employee Details</h2>
                <form onSubmit={updateProduct}>
                    <div className='mb-2'>
                        <label htmlFor='BranchName'><strong>Name :</strong> </label>
                        <input type='text' name='name' className='form-control' placeholder='Enter emp name' 
                        onChange={inputHandler} value={product.name} />
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='Location'><strong>Mobile:</strong> </label>
                        <input type='text' name='mobile' className='form-control' placeholder='Enter mobile no'
                          onChange={inputHandler} value={product.mobile} />
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='sector'><strong>Email:</strong> </label>
                        <input type='text' name='email' className='form-control' placeholder='Enter email' 
                        onChange={inputHandler} value={product.email} />
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='sector'><strong>Address:</strong> </label>
                        <input type='text' name='address' className='form-control' placeholder='Enter address' 
                        onChange={inputHandler} value={product.address} />
                    </div>
                    <div className='pt-3'>
                    <button className='btn btn-success'>Update</button>
                    <Link to="/admindash/emp" className='btn btn-primary ms-3' >Back</Link>
                    </div>
                </form>

            </div>
            
        </div>
    );
}

export default EditEmp;
