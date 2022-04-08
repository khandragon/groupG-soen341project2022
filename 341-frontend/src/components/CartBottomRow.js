import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

function CartBottomRow(props) {
  const navigate = useNavigate();

  return (
    <Row id="bottom-row">
      <Col>
        <h2>Total Order Price (CAD)</h2>
      </Col>
      <Col></Col>
      <Col>
        <h2>{props.sum}</h2>
      </Col>
      <Col>
        <Button size="lg" id="checkout" onClick={() => navigate("/Payment")}>
          Checkout
        </Button>
      </Col>
    </Row>
  );
}

export default CartBottomRow;
