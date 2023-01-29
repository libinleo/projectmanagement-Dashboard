import React, { Component ,useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

import axios from 'axios';
// import { useHistory} from "react-router-dom";
function LoginManager() {
  let navigate =useNavigate();

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const managerLogin=() =>{
    axios.post('http://127.0.0.1:5000/login',{
      
      username:username,
   
      password:password
    }).then(function(response){
      navigate('/emphome')

      console.log(response);
  
    })
    .catch(function(error){
    console.log(error);
  });
}
return (
  <div>
  <form className='auth-inner'>
    <h3> Manager Log In</h3>
    <div className="mb-3">
      <label>Username</label>
      <input
        type="rext"
        className="form-control"
        placeholder="Enter Manager Username"
      required onChange={(e) => setUsername(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter Manager password"
      required onChange={(e) => setPassword(e.target.value)}/>
    </div>
    
    <br /><Link to='/dashboardmanager'>
      <button type="submit" className="btn btn-primary" onClick={(e) => managerLogin(e)}>
        Submit
      </button></Link>
    <p className="forgot-password text-right" >
      Not Manager? <a href="/adminlogin" >Login as Admin</a>
    </p>
  </form>
  </div>
);

}

export default LoginManager