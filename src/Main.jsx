import React, { Component } from "react";
import { 
  Route,Routes,
  BrowserRouter,  
} from "react-router-dom";
import './styles/Main.css';
import Sidebar from "./components/Sidebar";
import SidebarManager from "./components/SidebarManager";
import Dashboard from "./pages/Dashboard";
import './styles/adminLogin.css'
import './styles/managerLogin.css'
import LoginAdmin from "./pages/adminLogin.jsx";
import LoginManager from "./pages/managerLogin.jsx";
import Emphome from "./pages/employeeHome";
import Createemp from "./pages/createEmployee";
import Projecthome from "./pages/projectHome";
import Createproject from "./pages/createProject";
import DashboardManager from "./pages/DashboardManager";

 
class Main extends Component {
  render() {
    return (
          <BrowserRouter>
          <Sidebar>
          
            <Routes>
            <Route path="/" element={<LoginAdmin/>}/>
            <Route path="/adminlogin" element={<LoginAdmin/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/emphome" element={<Emphome/>}/>  
            <Route path="/managerlogin" element={<LoginManager/>}/>
            <Route path="/createemp" element={<Createemp/>}/> 
            <Route path="/edit" element={<Createemp/>}/>
            <Route exact path="/projecthome" element={<Projecthome/>}/>  
            <Route path="/createproject" element={<Createproject/>}/> 
            <Route path="/edit" element={<Createproject/>}/>
            <Route path="/dashboardmanager" element={<DashboardManager/>}/>

            </Routes> 
            </Sidebar>
          </BrowserRouter>    
    );
  }
}
 
export default Main;