import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import base_url from "../Api/BootApi";

export default ()=>{
    useEffect(()=>{
        document.title ="Add Course"
    },[])
  const [course, setCourse] = useState({});
  const handleForm = (e)=>{
      console.log(course);
      e.preventDefault();
     postDataOnServer(course);
  }
  const postDataOnServer = (data)=> {
    axios.post(`${base_url}/courses`, data).then((response)=>{
        console.log(response.data);
        console.log("Success");
    },(error)=>{
        toast.error("Error Notification !", {
            position: toast.POSITION.TOP_CENTER
          });
        console.log(error);
        console.log("something went wrong");
    })
  }

return <div>
    <Form onSubmit = {handleForm}>
        <FormGroup>
            <Label for = "course-Id">Course-Id</Label>
            <Input type="Id" 
            id="Course-Id" 
            placeholder="Enter Course-Id" 
            onChange = {(e)=>{
                setCourse({...course, courseId : e.target.value});
            }}/>
        </FormGroup>
        <FormGroup>
            <Label for = "Course-Name">Course Name</Label>
            <Input type="Course-Name" 
            id="Course-Name" 
            placeholder="Enter Course Name"
            onChange = {(e)=>{
                 setCourse({...course, courseName : e.target.value})
            }} />
        </FormGroup>
        <FormGroup>
        <Label for="exampleText">Course Description</Label>
        <Input type="textarea" name="text" id="exampleText"
        placeholder = "Enter the course description" 
        onChange ={(e)=>{
            setCourse({...course, courseDesc: e.target.value})
        }}/>
        </FormGroup>
        <Button type ="submit" color = "success m-2">Add Course</Button>
        <Button type = "reset" color = "warning">Reset</Button>
    </Form>
 </div>
};