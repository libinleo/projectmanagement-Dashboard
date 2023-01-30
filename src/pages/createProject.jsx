import React,{useState, useEffect} from "react";
import{Button,Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker from "react-date-picker";
import{useNavigate, useSearchParams,Link} from 'react-router-dom';
import axios from 'axios';
function Createproject(){
    let navigate =useNavigate();
    const [searchParams] = useSearchParams();
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        if (searchParams.get('id')) {
            setEditMode(true);
            setName(searchParams.get('name'));
            setVertical(searchParams.get('vertical'));
            setStartdate(searchParams.get('start_date'));
            setDepartment(searchParams.get('department')) ; 
            setStatus(searchParams.get('status'))
        }
    }, [])
console.log(editMode);
const[name,setName]= useState("");
const[vertical,setVertical]= useState("");
const [startdate, setStartdate] = useState(new Date());
const[department,setDepartment]= useState("");
const[status,setStatus]= useState("");

const createPro=() =>{
    axios.post('http://127.0.0.1:5000/project',{
      name:name,
      vertical:vertical,
      start_date:startdate,
      department:department,
      status:status,     
    }).then(function(response){
        navigate('/projecthome')
      console.log(response); 
    })
    .catch(function(error){
    console.log(error);
  });
  }
  const editPro=() =>{
    axios.put(`http://127.0.0.1:5000/project/${searchParams.get('id')}`,{
        name:name,
        vertical:vertical,
        start_date:startdate,
        department:department,
        status:status,     
    }).then(function(response){
        // navigate('/emphome')
      console.log(response);  
    })
    .catch(function(error){
    console.log(error);
  });
  }
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName"><label>Enter Project Name</label>
                    <Form.Control value={name} type="text"  required onChange={(e) => setName(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br></br>
                <Form.Group className="mb-3" controlId="formVertical"><label>Enter Project Vertical</label>
                    <Form.Control  value={vertical} type="text"  required onChange={(e) => setVertical(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formStartdate"><label>Enter Project start-date</label>
                <DatePicker selected={startdate} onChange={(date) => setStartdate(date)} />
                    <Form.Control  value={startdate} type="text"  required onChange={(e) => setStartdate(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br/>
                
                <Form.Group className="mb-3" controlId="formDepartment"><label>Enter Project Department</label>
                   <Form.Control  value={department} type="text" select  required onChange={(e) => setDepartment(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br/>
                <Form.Group className="mb-3" controlId="formStatus"><label>Enter Project status</label>
                    <Form.Control  value={status} type="text"  required onChange={(e) => setStatus(e.target.value)}>   
                    </Form.Control>
                </Form.Group><br/>
                <br/><Link to='/projecthome'>
                <Button onClick={() => editMode ? editPro() : createPro()} type="submit">Submit</Button></Link>
            </Form>
        </div>
    )
}
export default Createproject;