import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';


const EditBranch = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({
        id: "",
        branchName: "",
        location: "",
        sector: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/branch/${id}`)
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
        axios.put(`http://localhost:3000/branch/${id}`, product)
            .then(() => {
                window.alert("Branch details updated successfully");
                nav("/admindash/branch");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
       
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h2 className='mb-4'>Update branch details</h2>
                <form onSubmit={updateProduct}>
                    <div className='mb-2'>
                        <label htmlFor='BranchName'><strong>Branch Name :</strong> </label>
                        <input type='text' name='branchName' className='form-control' placeholder='Enter branch name' 
                        onChange={inputHandler} value={product.branchName} />
                    </div>
                    
                    <div  className='mb-2'>
                        <label htmlFor='Location'><strong>Location:</strong> </label>
                        <input type='text' name='location' className='form-control' placeholder='Enter Location'
                          onChange={inputHandler} value={product.location} />
                    </div>
                    <div  className='mb-3'>
                        <label htmlFor='sector'><strong>Sector:</strong> </label>
                        <input type='text' name='sector' className='form-control' placeholder='Enter Sector' 
                        onChange={inputHandler} value={product.sector} />
                    </div>
                    <div className='pt-3'>
                    <button className='btn btn-success'>Update</button>
                    <Link to="/admindash/branch" className='btn btn-primary ms-3' >Back</Link>
                    </div>
                </form>

            </div>
            <Outlet/>
        </div>
    );
}

export default EditBranch;
