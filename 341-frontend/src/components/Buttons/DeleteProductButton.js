import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../api/Products-Api";

function DeleteProductButton(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function onButtonClick() {
    deleteProduct(props.isbn);
    setShow(true);
    navigate("/");
  }

  return (
    <div className="col-md-12 text-center">
      <Alert
        show={show}
        onClose={() => setShow(false)}
        dismissible
        transition
        variant="danger"
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

export default DeleteProductButton;
