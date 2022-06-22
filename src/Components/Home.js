import React, { useEffect, useState } from "react";
import { Jumbotron, Button } from 'reactstrap';

const Home = (props) => {
    useEffect(()=>{
        document.title = "Home";
    },[])
  return (
    <div>
        <h1 className="display-3">Hello, Students!</h1>
        <p className="lead">This is a simple Website  to collect more information about various provided courses</p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
          <Button color="primary">Contact-Us</Button>
        </p>
    </div>
  );
};

export default Home;