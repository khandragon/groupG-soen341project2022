import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/components/BigButton.css";

function AddCartButton(props) {
  function onButtonClick() {
    console.log("To cart with ID: " + props.itemID);
    //navigate("/cart");
  }
  return <Button onClick={onButtonClick}>Add to Cart</Button>;
}

export default AddCartButton;
