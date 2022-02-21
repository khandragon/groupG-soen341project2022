import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import About from "./About";

function Home(props) {
  const navigate = useNavigate();

  function onButtonClick() {
    console.log("to about");
    navigate("/about");
  }

  return (
    <div>
      <p>Hello Users</p>
      <Button onClick={onButtonClick}>Click</Button>
    </div>
  );
}

export default Home;
