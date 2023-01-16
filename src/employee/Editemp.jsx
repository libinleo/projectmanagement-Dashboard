import React,{useState, useEffect} from "react";
import{Button,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuid  } from "uuid";
import{Link,useNavigate} from 'react-router-dom';
import axios from "axios";
function Editemp()
{
    let navigate=useNavigate();
    const[name,setName]= useState("");
    const[skills,setSkills]= useState("");
    const[designation,setDesignation]= useState("");
    const[project,setProject]= useState("");
    const[id,setId]= useState("");
const editdetails=()=>{
    axios.post(`http://127.0.0.1:5000/update/${id}`,{
        emp_name:name,
        emp_skills:skills,
        emp_designation:designation,
        emp_project:project
    })
    .then(function(response){
        navigate('/emphome')
      console.log(response);
  
    })
    .catch(function(error){
        console.log(error);
      }); 
}
    // let history = useNavigate();

    // var index = Employees.map(function(e){
    //     return e.id
    
    // })
    // .indexOf(id);

    // const handleSubmit = (e)=> {
    //     e.preventDefault();
        
    
    //    let a = Employees[index];
    //    a.Name = name;
    //    a.Skills = skills;
    //    a.Designation=designation;
    //    a.Project=project;
    //     history('/emphome')
    // }
useEffect(() => {
editdetails()

},[])



    return(
        <div>
                <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>   
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
                <Button onClick={(e) => editdetails()} type="submit">Update</Button>
            </Form>
        </div>
    )
}
export default Editemp