import React, { Component ,useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
// import { useHistory} from "react-router-dom";
function LoginAdmin() {
  let navigate =useNavigate();
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const loginAdmin=() =>{
    axios.post('http://127.0.0.1:5000/loginad',{
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
    <h3> Admin Log In</h3>
    <div className="mb-3">
      <label>Username</label>
      <input
        type="rext"
        className="form-control"
        placeholder="Enter Admin Username"
      required onChange={(e) => setUsername(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter Admin password"
      required onChange={(e) => setPassword(e.target.value)}/>
    </div>
    
    <br /><Link to={'/dashboard'}>
      <button type="submit" className="btn btn-primary" onClick={(e) => loginAdmin(e)}>
        Submit
      </button></Link>
    <p className="forgot-password text-right" >
      Not admin? <a href="/managerlogin" >Login as Manager</a>
    </p>
  </form>
  </div>
);

}

export default LoginAdmin