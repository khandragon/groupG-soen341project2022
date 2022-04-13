import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

/*
Function CartRow, used in both OrderInfo.js and Cart.js; it displays the products present in the cart in a table. Does not
include the delete option for the Order Info page.
@param properties
*/
function CartRow(props) {
  const navigate = useNavigate();

  function removeItem() {
    props.onDelete(props.isbn);
  }

  return (
    <Row>
      <Col onClick={() => navigate("../Products/" + props.isbn)}>
        <h2>{props.name}</h2>
      </Col>
      <Col onClick={() => navigate("../Products/" + props.isbn)}>
        <h2>{props.isbn}</h2>
      </Col>
      <Col onClick={() => navigate("../Products/" + props.isbn)}>
        <h2>{props.unit_price}</h2>
      </Col>
      {props.type === "order" ? (
        ""
      ) : (
        <Col>
          <Image
            id="garbage"
            data-testid="DeleteCartItemBtn"
            src="https://www.freeiconspng.com/uploads/recycle-bin-garbage-bin-png-22.png"
            onClick={removeItem}
          ></Image>
        </Col>
      )}
    </Row>
  );
}

export default CartRow;
