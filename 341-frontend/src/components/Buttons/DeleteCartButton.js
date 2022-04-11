import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { addToCart } from "../../api/Carts-Api";

function DeleteCartButton(props) {
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
        variant="failure"
      >
        <Alert.Heading>Delete Item</Alert.Heading>
      </Alert>
      <Button
        className="sideButton"
        onClick={onButtonClick}
        color="orange"
        size="lg"
      >
        Deleted Item
      </Button>
    </div>
  );
}

export default DeleteCartButton;
