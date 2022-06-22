import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Toast } from 'reactstrap';
import base_url from '../Api/BootApi';

import { Router } from 'react-router';
import AddCourse from './AddCourse';

    const Course = ({course}) => {
       const handleDelete=()=>{
            axios.delete(`${base_url}/courses/${course.courseId}`).then((response)=>{
                console.log("course is deleted");
                window.location.reload();
            },(error)=>{
                console.log(error);
            })
        }
        
        return (
          <div>
            <Card className = 'text-center'body outline>
              <CardBody>
                  <CardSubtitle>Id : {course.courseId}</CardSubtitle>
                <CardTitle>Name : {course.courseName}</CardTitle>
                <CardText>{course.courseDesc}</CardText>
                <Container className ='text-center'>
                    <Button type = "delete" color = 'danger m-2 ' onClick = {handleDelete} >Delete</Button>
                    <Button color ="warning" >Update</Button>
                </Container>
              </CardBody>
            </Card>
          </div>
        );
      };
      
      export default Course;