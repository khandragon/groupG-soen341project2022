import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/Cart.css";
import { removeFromCart } from "../api/Carts-Api";

function CartRow(props) {
  function removeItem() {
    removeFromCart(props.cartID, props.isbn).then(props.onDelete());
  }

  return (
    <Row>
      <Col>
        <h2>{props.name}</h2>
      </Col>
      <Col>
        <h2>{props.isbn}</h2>
      </Col>
      <Col>
        <h2>{props.unit_price}</h2>
      </Col>
      <Col>
        <Image
          id="garbage"
          src="https://www.freeiconspng.com/uploads/recycle-bin-garbage-bin-png-22.png"
          onClick={removeItem}
        ></Image>
      </Col>
    </Row>
  );
}

export default CartRow;
