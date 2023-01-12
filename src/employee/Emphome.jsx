import React, { Fragment } from "react";
import {Button,Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Employees";
import{Link,useNavigate} from 'react-router-dom'

function Emphome()
{
    let history=useNavigate();

    const handleEdit = (id, name, skills,designation,project) =>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Skills',skills)
        localStorage.setItem('Id',id)
        localStorage.setItem('Designation',designation)
        localStorage.setItem('Project',project)

    }
    const handleDelete=(id)=>{
        var index = Employees.map(function(e){
            return e.id
        })
        .indexOf(id)
        Employees.splice(index,1);
        history('/emphome')
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
                                Employees && Employees.length > 0 ? Employees.map((item) => {
                                return(
                                        <tr>
                                        <td>{item.Name}</td>
                                         <td>{item.Skills}</td>
                                         <td>{item.Designation}</td>
                                         <td>{item.Project}</td>
                                            <td>
                                            <Link to={'/edit'}>
                                            <Button onClick={() => handleEdit(item.id,item.Name,item.Skills,item.Designation,item.Project)}>Edit</Button></Link>&nbsp;
                                           <Button onClick={() => handleDelete(item.id)}>Delete</Button>
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