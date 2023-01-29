import React, { Fragment, useEffect,useState } from "react";
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import{createSearchParams, Link,useNavigate} from 'react-router-dom'
import axios from "axios";

function Projecthome()
{
    const [details,setDetails]=useState([])   
     const getDetails=() =>{
        axios.get('http://127.0.0.1:5000/getproject')
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
    const handleEdit = (id, name, vertical,startdate,department,status) =>{
        const params = {id, name, vertical,startdate,department,status};
        navigate({
            pathname: '/createproject',
            search: `?${createSearchParams(params)}`
        })
    }
    const handleDelete=(id)=>{
        axios.delete(`http://127.0.0.1:5000/deleteproject/${id}`)
        navigate(0);
    }
    return(
        <Fragment>
            
            <div style={{margin:"7rem"}}>
            <div>
                <Link className='d-grid gap-7' to ="/createproject">
                    <Button size="md">+ Create New Project</Button>
                </Link>
                </div><br />    
                <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Vertical </th>
                            <th>Project Start-Date </th>
                            <th>Project Department </th>
                            <th>Project Status </th>
                            <th>Actions </th>
                            
                        </tr>
                        </thead>
                        <tbody>
                                {
                                details && details.length > 0 ? details.map((item) => {
                                return(
                                    <tr>
                                        <td>{item.proj_name}</td>
                                         <td>{item.proj_vertical}</td>
                                         <td>{item.proj_startdate}</td>
                                         <td>{item.proj_department}</td>
                                         <td>{item.proj_status}</td>
                                         <td>
                                           <Button onClick={() => handleEdit(item.proj_id,item.proj_name,item.proj_vertical,item.proj_startdate,item.proj_department,item.proj_status)}>Edit</Button>&nbsp;
                                           <Button onClick={() => handleDelete(item.proj_id)}>Delete</Button>
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
export default Projecthome;