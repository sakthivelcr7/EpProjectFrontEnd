import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet} from 'react-router-dom';



const EmpTable = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:3000/employee')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, []);
    const handleDelete=(id)=>{
        const confirm=window.confirm("Are you sure want to delete");
        if(confirm){
            axios.delete('http://localhost:3000/employee/'+id)
            .then(res =>{
                window.location.reload()
            }).catch(err => console.log(err))
        }
    }

    return (
        <div className='container mt-5 '>
            <h3 className=' d-flex justify-content-center'>EmployeeList</h3>
            <div className=' d-flex justify-content-end'>
            <Link to="/admindash/empcreate" className="btn btn-success">AddEmp
            </Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr className='bg-secondary'>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => {
                        return <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.mobile}</td>
                            <td>{d.email}</td>
                            <td>{d.address}</td>
                            <td>
                                <Link to={`/admindash/empedit/${d.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                {/* <Link to="/delete" className='btn btn-sm btn-danger me-2' onClick={e => handleDelete(d.id)}>Delete</Link> */}
                                <button  className='btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button>
                                
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Outlet/>
        </div>
    )
}

export default EmpTable;
