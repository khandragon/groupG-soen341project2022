import React from "react";
import { Button } from "react-bootstrap";
import { addToCart } from "../../api/Carts-Api";

function AddCartButton(props) {
  function onButtonClick() {
    addToCart(props.cartID, props.isbn);
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
