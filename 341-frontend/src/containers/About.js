import React from "react";
import "../styles/About.css";
import { Button } from "react-bootstrap";

function About(props) {
  function onButtonClick() {}

  return (
    <div>
      <p className="text-heading">About {props.myuser}</p>
      <Button onClick={onButtonClick}>Click</Button>
    </div>
  );
}

export default About;
