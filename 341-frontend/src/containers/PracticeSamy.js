import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from "react-bootstrap";


const PracticeSamy = () => {
    return (
    <div>
        <b>Testing Component</b>
        <Alert  variant="dark" style={{ width: "42rem" }}>
            <ListGroup>
                <ListGroupItem variant="primary">Name 1</ListGroupItem>
                <ListGroupItem variant="primary">Name 2</ListGroupItem>
                <ListGroupItem variant="primary">Name 3</ListGroupItem>
                <ListGroupItem variant="primary">Name 4</ListGroupItem>
                <ListGroupItem variant="primary">Name 5</ListGroupItem>
            </ListGroup>
        </Alert>
    </div>
    );
};

export default PracticeSamy;