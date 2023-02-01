import React, { Component, useState} from 'react'
import {Routes, Route, useNavigate,Link} from 'react-router-dom';
import axios from 'axios';

  function Register() {
    const navigate = useNavigate();
  // const navigateTo = () => history.push('/sign-in');
const[fullname,setFullname]=useState('');
const[username,setUsername]=useState('');
const[password,setPassword]=useState('');
const register=() =>{
  axios.post('http://127.0.0.1:5000/register',{
    fullname:fullname,
    username:username,
    password:password
  }).then(function(response){
    console.log(response);
    navigate('/login')
  })
  .catch(function(error){
  console.log(error);
});
}
    return (
      <div className='page'>
      <div className='cover'>
        <h3> Sign Up</h3>
        <input
            type="text"
            placeholder="Enter Fullname"
          required onChange={(e) => setFullname(e.target.value)}/>
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
          <div className="login-btn" onClick={(e) => register(e)}>
            Submit
          </div>
        <p className="forgot-password text-right" >
          Already Registered?<a href="/login" >Login!</a>
        </p>  
      </div></div>
    )

  
}
export default Register