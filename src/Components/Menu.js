import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem} from 'reactstrap';

export default ()=> {

    return (
      <ListGroup>
        <Link className = "list-group-item list-group-item-action" tag="a" to ="/" action>
            Home
        </Link>
        <Link className = "list-group-item list-group-item-action" tag="a" to ="/View-Courses" action>
            View Courses
        </Link>
        <Link className = "list-group-item list-group-item-action" tag="a" to ="/Add-Course" action>
            Add Courses
        </Link>
      </ListGroup>
    );

}