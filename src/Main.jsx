import React, { Component } from "react";
import { 
  Route,Routes,
  NavLink,
  HashRouter,
  
} from "react-router-dom";

import Home from "./Home";
// import Employee from "./employee/Employees";
import Project from "./Project";
import Emphome from "./employee/Emphome";
import Editemp from "./employee/Editemp";
import Createemp from "./employee/Createemp";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
      <nav>  
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/emphome">Project</NavLink></li>
          {/* <li><NavLink to="/project">Project</NavLink></li> */}
          
          
          </ul></nav> 
         
          <div className="content">
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            {/* <Route path="./employee" element={<Employee/>}/> */}
            {/* <Route path="/project" element={<Project/>}/> */}
            <Route path="/emphome" element={<Emphome/>}/>
            <Route path="/create" element={<Createemp/>}/>
            <Route path="/edit" element={<Editemp/>}/>
            </Routes> 
            </div>
            </HashRouter>
         
        
    );
  }
}
 
export default Main;