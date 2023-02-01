import React, { Component } from "react";
import { 
  Route,Routes,
  BrowserRouter,  
} from "react-router-dom";
import './styles/Main.css';
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import './styles/Login.css'
import './styles/Register.css'
import Login from "./Login/Login.jsx";
import Signup from "./Login/Register.jsx";
import Emphome from "./pages/employeeHome";
import Createemp from "./pages/createEmployee";
import Projecthome from "./pages/projectHome";
import Createproject from "./pages/createProject";

class Main extends Component {
  render() {
    return (
          <BrowserRouter>
          {/* <Sidebar> */}
          
            <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/emphome" element={<Emphome/>}/>   */}
            <Route path="/register" element={<Signup/>}/>
            {/* <Route path="/createemp" element={<Createemp/>}/> 
            <Route path="/edit" element={<Createemp/>}/>
            <Route exact path="/projecthome" element={<Projecthome/>}/>  
            <Route path="/createproject" element={<Createproject/>}/> 
            <Route path="/edit" element={<Createproject/>}/> */}
            

            </Routes> 
            {/* </Sidebar> */}
          </BrowserRouter>    
    );
  }
}
 
export default Main;