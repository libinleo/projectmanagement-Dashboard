import React, { Fragment, useEffect,useState } from "react";
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import{createSearchParams, Link,useNavigate} from 'react-router-dom'
import axios from "axios";

function Projecthome()
{
    const [details,setDetails]=useState([])   
     const getDetails=() =>{
        axios.get('http://127.0.0.1:5000/project')
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
    const handleEdit = (id, name, vertical,start_date,department,status) =>{
        const params = {id, name, vertical,start_date,department,status};
        navigate({
            pathname: '/createproject',
            search: `?${createSearchParams(params)}`
        })
    }
    const handleDelete=(id)=>{
        axios.delete(`http://127.0.0.1:5000/project/${id}`)
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
                                        <td>{item.name}</td>
                                         <td>{item.vertical}</td>
                                         <td>{item.start_date}</td>
                                         <td>{item.department}</td>
                                         <td>{item.status}</td>
                                         <td>
                                           <Button onClick={() => handleEdit(item.id,item.name,item.vertical,item.start_date,item.department,item.status)}>Edit</Button>&nbsp;
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
export default Projecthome;