import React,{useRef,useState} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { BrowserRouter as Router,Link,Route,Routes } from "react-router-dom";
import Home from "../LandPage/Home";

const Logout =({selectedOption}) =>{
    const nav = useNavigate();

    const handleLogout=()=>{
        sessionStorage.removeItem(selectedOption);
        nav("/");
    }
    return(
        <div>
            <button type='button' className="btn btn-danger mt-2" onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default Logout;