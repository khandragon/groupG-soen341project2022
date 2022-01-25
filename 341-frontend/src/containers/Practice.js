import React from "react";
import { Button, Card, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Practice() {
 
  
    return (
      <div>
        <p>Testing Component</p>
        <Alert variant="secondary" style={{ width: '15rem' }}>
        
  
        <Button variant="info" style={{ width: '12rem' }}> <h6 align = "left">Name1 </h6></Button> <br /> <br />
        <Button variant="info" style={{ width: '12rem' }}><h6 align = "left">Name2 </h6></Button><br /> <br />
        <Button variant="info" style={{ width: '12rem' }}><h6 align = "left">Name3 </h6></Button><br /> <br />
        <Button variant="info" style={{ width: '12rem' }}><h6 align = "left">Name4 </h6></Button><br /> <br />
        <Button variant="info" style={{ width: '12rem' }}><h6 align = "left">Name5 </h6></Button>
       
        </Alert>
      </div>
    );
  }
  
  export default Practice;
