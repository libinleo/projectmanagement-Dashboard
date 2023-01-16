import React, { Component } from "react";
import { 
  Route,Routes,
  NavLink,
  BrowserRouter,  
} from "react-router-dom";

import Login from "./Login/Login.jsx";
import Signup from "./Login/Signup.jsx";
import Emphome from "./employee/Emphome";
import Editemp from "./employee/Editemp";
import Createemp from "./employee/Createemp";
 
class Main extends Component {
  render() {
    return (
      

          <BrowserRouter>
            <Routes>
            <Route exact path="/emphome" element={
                <Emphome/>
              }/>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Signup/>}/>

            <Route path="/create" element={
              <Createemp/>
            }/>
            <Route path="/edit" element={
              <Editemp/>
            }/>
            </Routes> 
          </BrowserRouter>
         
        
    );
  }
}
 
export default Main;