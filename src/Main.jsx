import React, { Component } from "react";
import { 
  Route,Routes,
  BrowserRouter,  
} from "react-router-dom";
<<<<<<< HEAD
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

 
=======
import './Login/Login.css'
import Login from "./Login/Login.jsx";
import Signup from "./Login/Signup.jsx";
import Emphome from "./employee/Emphome";
import Editemp from "./employee/Editemp";
import Createemp from "./employee/Createemp";
import Protectedroutes from "./RouteProtect";
>>>>>>> 7376ef83d9411e5798ae629b62d84a5e4c7d771d
class Main extends Component {
  render() {
    return (
          <BrowserRouter>
          <Sidebar>
          
            <Routes>
<<<<<<< HEAD
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
=======
            <Route exact path="/emphome" element={
                <Emphome/>
              }/>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>
>>>>>>> 7376ef83d9411e5798ae629b62d84a5e4c7d771d

            </Routes> 
            </Sidebar>
          </BrowserRouter>    
    );
  }
}
 
export default Main;