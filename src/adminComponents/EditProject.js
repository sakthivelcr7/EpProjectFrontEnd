import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';

const EditProject = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({
        id: "",
        pname: "",
        cname: "",
        duration: "",
        status:""
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/project/${id}`)
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
        axios.put(`http://localhost:3000/project/${id}`, product)
            .then(() => {
                window.alert("product details updated successfully");
                nav("/admindash/emp");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
   
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'>Update project Details</h2>
                <form onSubmit={updateProduct}>
                    <div className='mb-2'>
                        <label htmlFor='productName'><strong>Product Name :</strong> </label>
                        <input type='text' name='pname' className='form-control' placeholder='Enter product name' 
                        onChange={inputHandler} value={product.pname} />
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='clintname'><strong>Client Name:</strong> </label>
                        <input type='text' name='cname' className='form-control' placeholder='Enter client Name'
                          onChange={inputHandler} value={product.cname} />
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='duration'><strong>Duration:</strong> </label>
                        <input type='text' name='duration' className='form-control' placeholder='Enter Duration' 
                        onChange={inputHandler} value={product.duration} />
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='status'><strong>Status:</strong> </label>
                        <input type='text' name='status' className='form-control' placeholder='Enter status' 
                        onChange={inputHandler} value={product.status} />
                    </div>
                    <div className='pt-3'>
                    <button className='btn btn-success'>Update</button>
                    <Link to="/admindash/project" className='btn btn-primary ms-3' >Back</Link>
                    </div>
                </form>

            </div>
            <Outlet/>
        </div>
    );
}

export default EditProject;
