import React, { Component } from "react";
import { 
  Route,Routes,
  BrowserRouter,  
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./Login/Login";
import Signup from "./Login/Register";
// import "./pages/Dashboard.css";
// import "./Login/Login.css";
// import "./Login/Register.css";
// import "./Main.css";
import Emphome from "./pages/employeeHome";
import Createemp from "./pages/createEmployee";
import Projecthome from "./pages/projectHome";
import Createproject from "./pages/createProject";

class Main extends Component {
  render() {
    return (
          <BrowserRouter>
           <Dashboard> 
          
            <Routes>
            <Route path="/" element={<Login/>}/>
           
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>
            {/* <Route exact path="/dashboard" element={<Dashboard/>}/> */}
            <Route exact path="/emphome" element={<Emphome/>}/>   
            <Route path="/createemp" element={<Createemp/>}/> 
            <Route path="/edit" element={<Createemp/>}/>
              
            <Route path="/createproject" element={<Createproject/>}/> 
            <Route path="/edit" element={<Createproject/>}/> 
           
           <Route exact path="/projecthome" element={<Projecthome/>}/>
            </Routes> 
            </Dashboard> 
          </BrowserRouter>    
    );
  }
}
 
export default Main;