import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();

  function onButtonClick() {
    navigate("/about");
  }

  return (
    <div>
      <p>Welcome to Localize</p>
    </div>
  );
}

export default Home;
