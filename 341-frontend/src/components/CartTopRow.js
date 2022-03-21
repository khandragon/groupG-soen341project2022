import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Cart.css";

function CartTopRow(props) {
  const cartArr = ["Name", "ID", "Unit Price", ""];

  return (
    <Row className="top-row">
      {cartArr.map((value) => {
        return (
          <Col key={value}>
            <h2 className="column-titles">{value}</h2>
          </Col>
        );
      })}
    </Row>
  );
}

export default CartTopRow;
