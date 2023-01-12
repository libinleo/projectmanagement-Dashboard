import React,{useState} from "react";
import{Button,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Employees";
import { v4 as uuid  } from "uuid";
import{Link,useNavigate} from 'react-router-dom';
 
function Createemp(){

const[name,setName]= useState("");
const[skills,setSkills]= useState("");
const[designation,setDesignation]= useState("");
const[project,setProject]= useState("");

let history=useNavigate();
const handleSubmit = (e)=> {
    e.preventDefault();
    

    const ids=uuid();
    let uniqueId=ids.slice(0,8);

    let a=name;
    let b=skills;
    let c=designation;
    let d=project;

    Employees.push({ id: uniqueId, Name : a, Skills :b, Designation:c,Project:d });

    history('/emphome')
}
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>   
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Skills" required onChange={(e) => setSkills(e.target.value)}>   
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Designation" required onChange={(e) => setDesignation(e.target.value)}>   
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Project name" required onChange={(e) => setProject(e.target.value)}>   
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>

    )
}
export default Createemp;