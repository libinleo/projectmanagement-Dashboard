import React, { Component, useState} from 'react'
import {Routes, Route, useNavigate,Link} from 'react-router-dom';
import axios from 'axios';
  function Signup() {
    const navigate = useNavigate();
  // const navigateTo = () => history.push('/sign-in');
const[fullname,setFullname]=useState('');
const[username,setUsername]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const register=() =>{
  axios.post('http://127.0.0.1:5000/register',{
    fullname:fullname,
    username:username,
    email:email,
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
      <>
      <h3 className='prm'>Project Resource Management</h3><br /><br /><br />
      <form>
        <h3>Sign Up</h3>
        <div className="mb-1">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
         required onChange={(e) => setFullname(e.target.value)}/>
        </div>
        <div className="mb-1">
          <label>User name</label>
          <input type="text" className="form-control" placeholder="User name" required onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="mb-1">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          required onChange={(e) => setPassword(e.target.value)}/>
        </div><br />
        <div className="d-grid"><Link to='/login'>
          <button type="submit" className="btn btn-primary"onClick={() => register()}>
            Sign Up
          </button></Link>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form></>
    )

  
}
export default Signup