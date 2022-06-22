import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import Course from "./Course";
import base_url from "../Api/BootApi";

export default ()=>{

    useEffect(()=>{
        document.title = "All Courses";
        getAllCoursesFromServer();
    },[])

    const getAllCoursesFromServer = () =>{
       axios.get(`${base_url}/courses`).then((response)=>{
           console.log(response.data);
           toast.success("courses loaded");
           setCourses(response.data);
       },(error)=>{})
       toast.warning("something went wrong");
    };
   const [courses, setCourses] = useState([

   ]);

  

   const getCourses = () =>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("courses has been loaded");
                setCourses(response.data);
                console.log(courses);
            },
            (error)=>{
                 toast.error("something went wrong");
            }
        )
   }
  
  return (<div>
    <h1>All courses</h1>
    <p>list of all courses</p>
       {
        courses.length>0 
           ? courses.map(item=>(<Course key ={item.courseId} course={item}/>)) : "No courses" 
       } 
  </div>)
};
