import React,{useState, useEffect} from "react";
import{Button,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
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
            
        }
    }, [])
    
    console.log(editMode);
const[name,setName]= useState("");
const[skills,setSkills]= useState("");
const[designation,setDesignation]= useState("");
const create=() =>{
    axios.post('http://127.0.0.1:5000/createemployee',{
      emp_name:name,
      emp_skills:skills,
      emp_designation:designation,  
    }).then(function(response){
        navigate('/emphome')
      console.log(response);
    })
    .catch(function(error){
    console.log(error);
  });
  }
  const edit=() =>{
    axios.put(`http://127.0.0.1:5000/updateemployee/${searchParams.get('id')}`,{
      _emp_name:name,
      _emp_skills:skills,
      _emp_designation:designation,
      
    }).then(function(response){
        // navigate('/emphome')
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
                <Form.Group className="mb-3" controlId="formName"><label>Enter Employee Name</label>
                    <Form.Control value={name} type="text"  required onChange={(e) => setName(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br></br>
                <Form.Group className="mb-3" controlId="formSkills"><label>Enter Employee Skills</label>
                    <Form.Control  value={skills} type="text"  required onChange={(e) => setSkills(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formDesignation"><label>Enter Employee Designation</label>
                    <Form.Control  value={designation} type="text"  required onChange={(e) => setDesignation(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br/>
                <br/><Link to='/emphome'>
                <Button onClick={() => editMode ? edit() : create()} type="submit">Submit</Button></Link>
            </Form>
        </div>

    )
}
export default Createemp;