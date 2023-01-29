import React, { Fragment, useEffect,useState } from "react";
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import{createSearchParams, Link,useNavigate} from 'react-router-dom'
import axios from "axios";

function Emphome()
{
    const [details,setDetails]=useState([])   
     const getDetails=() =>{
        axios.get('http://127.0.0.1:5000/getemployee')
        .then(function(response){
            setDetails(response.data)
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    useEffect(() => {
        getDetails()
    },[])
    let navigate=useNavigate();
    const handleEdit = (id, name, skills,designation) =>{
        const params = {id, name, skills, designation};
        navigate({
            pathname: '/createemp',
            search: `?${createSearchParams(params)}`
        })
    }
    const handleDelete=(id)=>{
        axios.delete(`http://127.0.0.1:5000/deleteemployee/${id}`)
        navigate(0);
    }
    return(
        <Fragment>
            
            <div style={{margin:"7rem"}}>
            <div>
                <Link className='d-grid gap-7' to ="/createemp">
                    <Button size="md">+ Create New Employee</Button>
                </Link>
                </div><br />    
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skills </th>
                            <th>Designation </th>
                            <th>Actions </th>
                            
                        </tr>
                        </thead>
                        <tbody>
                                {
                                details && details.length > 0 ? details.map((item) => {
                                return(
                                        <tr>
                                        <td>{item.emp_name}</td>
                                         <td>{item.emp_skills}</td>
                                         <td>{item.emp_designation}</td>
                                         
                                            <td>
                                            
<<<<<<< HEAD:src/pages/employeeHome.jsx
                                            <Button onClick={() => handleEdit(item.emp_id,item.emp_name,item.emp_skills,item.emp_designation)}>Edit</Button>&nbsp;
=======
                                            <Button onClick={() => handleEdit(item.emp_id,item.emp_name,item.emp_skills,item.emp_designation,item.emp_project)} type="button">Edit</Button>&nbsp;
>>>>>>> 7376ef83d9411e5798ae629b62d84a5e4c7d771d:src/employee/Emphome.jsx
                                           <Button onClick={() => handleDelete(item.emp_id)}>Delete</Button>
                                             </td>
                                        </tr>
                                    )
                                    
                                })
                                :"No data available"
                            }
                        
                        </tbody>
                </Table>
                
                </div>
        </Fragment>
    )
}
export default Emphome;