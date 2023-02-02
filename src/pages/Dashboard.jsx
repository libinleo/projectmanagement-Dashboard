import React, { useState } from 'react'
import { FaBars ,
    FaTh,
    FaUserAlt,FaBookOpen
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import './Dashboard.css'
import { NavLink } from 'react-router-dom';

const Dashboard = ({children}) => {
    const[isOpen, setIsopen]=useState(false);
    const toggle = () => setIsopen(!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/emphome",
            name:"Employee details",
            icon:<FaUserAlt/>
        },
        {
            path:"/projecthome",
            name:"Project details",
            icon:<FaBookOpen/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<CiLogout/>
        },
    ]
  return (
    <div className='container'>
        <div  style={{width: isOpen ? "250px" : "60px"}}className='sidebar'>
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Dashboard