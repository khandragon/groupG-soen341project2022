import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/Cart.css";

function CartRow(props) {
  return (
    <Row>
      <Col>
        <h2>{props.name}</h2>
      </Col>
      <Col>
        <h2>{props.id}</h2>
      </Col>
      <Col>
        <h2>{props.unit_price}</h2>
      </Col>
      <Col>
        <Image
          id="garbage"
          src="https://www.freeiconspng.com/uploads/recycle-bin-garbage-bin-png-22.png"
        ></Image>
      </Col>
    </Row>
  );
}

export default CartRow;
