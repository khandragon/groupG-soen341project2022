import React from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from "react-bootstrap";


const PracticeSamy = () => {

    const arr = [1, 2, 3, 4, 5];

    return (
    <div>
        <b>Testing Component</b>
        <Alert  variant="dark" style={{ width: "42rem" }}>
            <ListGroup>
                {arr.map((val) => {
                    return (
                        <> 
                            <ListGroupItem variant="primary">Name {val}</ListGroupItem>
                            <br />
                        </>
                    );
                })}
            </ListGroup>
        </Alert>
    </div>
    );
};

export default PracticeSamy;