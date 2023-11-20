import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Protected =(props)=> {
    const nav =useNavigate();
    useEffect(()=>{
        let currentUser = !sessionStorage.getItem("user");
        if(currentUser){
            nav("/login")
        }
    },[])
    const {Component} =props;

    return(
        <div>
            <Component></Component>
        </div>
    )
}

export default Protected;