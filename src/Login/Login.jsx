import React, { Component ,useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Login.css";



// import { useHistory} from "react-router-dom";
function Login() {
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"),3000)
    }
  let navigate =useNavigate();
  const [popupStyle,showPopup] =useState("hide")
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const login=(event) =>{
    event.preventDefault();
    axios.post('http://127.0.0.1:5000/login',{
      username:username,  
      password:password
    }).then(function(response){
      navigate('/dashboard')

      console.log(response);
  
    })
    .catch(function(error){
    console.log(error);
  });
}
return (
  <div className='page'>
  <div className='cover'>
    <h3> Log In</h3>
      <input
        type="text"
        placeholder="Enter Username"
      required onChange={(e) => setUsername(e.target.value)}/><br/>
      <input
        type="password"
        className="text"
        placeholder="Enter password"
      required onChange={(e) => setPassword(e.target.value)}/>    
    <br />
      <div className="login-btn" onClick={(e) => login(e)}>
        Login
      </div>
    <p className="forgot-password text-right" >
      Don't have an account?<a href="/register" >Register here!</a>
    </p>  
    <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>Username or Password incorrect</p>
        </div>
  </div>
  </div>
);

}

export default Login