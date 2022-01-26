import React from "react";
import { Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Practice() {
  var arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <p>Testing Component</p>
      <Alert variant="secondary" style={{ width: "15rem" }}>
        {arr.map((val) => {
          return (
            <>
              <Button variant="info" style={{ width: "12rem" }}>
                {" "}
                <h6 align="left">Name{val} </h6>
              </Button>
              <br />
              <br />
            </>
          );
        })}
      </Alert>
    </div>
  );
}
export default Practice;
