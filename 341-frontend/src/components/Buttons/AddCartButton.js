import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddCartButton(props) {
  function onButtonClick() {
    console.log("To cart with ID: " + props.itemID);
    //navigate("/cart");
  }
  return (
    <div class="col-md-12 text-center">
      <Button onClick={onButtonClick} color="orange" size="lg">
        Add to Cart
      </Button>
    </div>
  );
}

export default AddCartButton;
