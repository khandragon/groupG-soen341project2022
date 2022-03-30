import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { addToCart } from "../../api/Carts-Api";

function AddCartButton(props) {
  const [show, setShow] = useState(false);

  function onButtonClick() {
    addToCart(props.cartID, props.isbn);
    setShow(true);
  }

  return (
    <div className="col-md-12 text-center">
      <Alert
        show={show}
        onClose={() => setShow(false)}
        dismissible
        transition
        variant="success"
      >
        <Alert.Heading>Added to Cart</Alert.Heading>
      </Alert>
      <Button
        className="sideButton"
        onClick={onButtonClick}
        color="orange"
        size="lg"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default AddCartButton;
