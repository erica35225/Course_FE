import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Button ,Row,Col, Container} from 'reactstrap';
import Header from './Components/Header';
import Course from './Components/Course';
import Menu from './Components/Menu';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
const App = () => {
  return (
      <div>
      <Router>
      <Container>
       <Header color = "warning"></Header>
         <Row>
         <Col md ={4}>
            <Menu></Menu>
         </Col>
         <Col md ={8}>
           <Routes>
           <Route path ="/" element = {<Home/>} exact/>
           <Route path ="/View-Courses" element = {<AllCourses/>} exact />
           <Route path ="/Add-Course" element = {<AddCourse/>} exact/>
           </Routes>
         </Col>
        </Row>
       </Container>
      </Router>
    </div>
     );
};

export default App;
