import React, { Component ,useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import './Login.css'
import axios from 'axios';
// import { useHistory} from "react-router-dom";
function Login() {
  let navigate =useNavigate();

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const login=() =>{
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
  <>
  <h3 className='prm'>Project Resource Management</h3><br /><br /><br />
  <form className='auth-wrapper'>
    {/* auth.inner */}
    <h3>Log In</h3>
    <div className="mb-3">
      <label>Username</label>
      <input
        type="rext"
        className="form-control"
        placeholder="Enter Username"
      required onChange={(e) => setUsername(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      required onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <div className="mb-3">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck1"
        required/>
        <label className="custom-control-label" htmlFor="customCheck1">
          Remember me
        </label>
      </div>
    </div><br /><Link to='/emphome'>
      <button type="button" className="btn btn-primary" onClick={(e) => login(e)}>
        Submit
      </button></Link>
    <p className="forgot-password text-right" >
      Don't have an account? <a href="/register" >Register here!</a>
    </p>
  </form>
  </>
);
  // const history = useNavigate();
  // const navigateTo = () => history.push('/home');
}

export default Login