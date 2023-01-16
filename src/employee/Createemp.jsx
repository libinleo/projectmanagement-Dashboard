import React,{useState, useEffect} from "react";
import{Button,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Employees from "./Employees";
import { v4 as uuid  } from "uuid";
import{useNavigate, useSearchParams,Link} from 'react-router-dom';
import axios from 'axios';
function Createemp(){
    let navigate =useNavigate();
    const [searchParams] = useSearchParams();
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (searchParams.get('id')) {
            setEditMode(true);
            setName(searchParams.get('name'));
            setSkills(searchParams.get('skills'))
            setDesignation(searchParams.get('designation'))
            setProject(searchParams.get('project'))
        }
    }, [])
    
    console.log(editMode);
const[name,setName]= useState("");
const[skills,setSkills]= useState("");
const[designation,setDesignation]= useState("");
const[project,setProject]= useState("");
const create=() =>{
    axios.post('http://127.0.0.1:5000/insert',{
      emp_name:name,
      emp_skills:skills,
      emp_designation:designation,
      emp_project:project
    }).then(function(response){
        navigate('/emphome')
      console.log(response);
  
    })
    .catch(function(error){
    console.log(error);
  });
  }

  const edit=() =>{
    axios.put(`http://127.0.0.1:5000/update/${searchParams.get('id')}`,{
      _emp_name:name,
      _emp_skills:skills,
      _emp_designation:designation,
      _emp_project:project
    }).then(function(response){
        navigate('/emphome')
      console.log(response);
  
    })
    .catch(function(error){
    console.log(error);
  });
  }
// let history=useNavigate();

//     history('/emphome')
// }
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control value={name} type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>   
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control  value={skills} type="text" placeholder="Enter Skills" required onChange={(e) => setSkills(e.target.value)}>   
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control  value={designation} type="text" placeholder="Enter Designation" required onChange={(e) => setDesignation(e.target.value)}>   
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control  value={project} type="text" placeholder="Enter Project name" required onChange={(e) => setProject(e.target.value)}>   
                    </Form.Control>
                </Form.Group><Link to='/emphome'>
                <Button onClick={() => editMode ? edit() : create()} type="button">Submit</Button></Link>
            </Form>
        </div>

    )
}
export default Createemp;