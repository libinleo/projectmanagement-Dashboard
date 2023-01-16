import React, { Fragment, useEffect,useState } from "react";
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Employees";
import{createSearchParams, Link,useNavigate} from 'react-router-dom'
import axios from "axios";

function Emphome()
{
    const [details,setDetails]=useState([])
    
    const getDetails=() =>{

        axios.get('http://127.0.0.1:5000/getdetails')
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
      
      }, [])
      
    let navigate=useNavigate();

    const handleEdit = (id, name, skills,designation,project) =>{
        // localStorage.setItem('Name',name)
        // localStorage.setItem('Skills',skills)
        // localStorage.setItem('Id',id)
        // localStorage.setItem('Designation',designation)
        // localStorage.setItem('Project',project)
        const params = {id, name, skills, designation, project};
        navigate({
            pathname: '/create',
            search: `?${createSearchParams(params)}`
        })
    }
    const handleDelete=(id)=>{
        axios.delete(`http://127.0.0.1:5000/delete/${id}`)
        // var index = details.map(function(e){
        //     return e.id
        // })
        // .indexOf(id)
        // details.splice(index,1);
        // history('/emphome')
        navigate(0);
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skills </th>
                            <th>Designation </th>
                            <th>Project </th>
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
                                         <td>{item.emp_project}</td>
                                            <td>
                                            
                                            <Button onClick={() => handleEdit(item.emp_id,item.emp_name,item.emp_skills,item.emp_designation,item.emp_project)}>Edit</Button>&nbsp;
                                           <Button onClick={() => handleDelete(item.emp_id)}>Delete</Button>
                                             </td>
                                        </tr>
                                    )
                                    
                                })
                                :"No data available"
                            }
                        
                        </tbody>
                </Table>
                <div>
                <Link className='d-grid gap-2' to ="/create">
                    <Button size="md">Create</Button>
                </Link>
                </div>
                </div>
        </Fragment>
    )
}
export default Emphome;