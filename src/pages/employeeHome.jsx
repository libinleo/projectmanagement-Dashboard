import React, { Fragment, useEffect,useState } from "react";
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import{createSearchParams, Link,useNavigate} from 'react-router-dom'
import axios from "axios";

function Emphome()
{
    const [details,setDetails]=useState([])   
     const getDetails=() =>{
        axios.get('http://127.0.0.1:5000/employee')
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
        axios.delete(`http://127.0.0.1:5000/employee/${id}`)
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
                                        <td>{item.name}</td>
                                         <td>{item.skills}</td>
                                         <td>{item.designation}</td>
                                         
                                            <td>
                                            
                                            <Button onClick={() => handleEdit(item.id,item.name,item.skills,item.designation)}>Edit</Button>&nbsp;
                                           <Button onClick={() => handleDelete(item.id)}>Delete</Button>
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