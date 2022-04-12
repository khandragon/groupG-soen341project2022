import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

/*
Function CartBottomRow, used in both Cart.js and OrderInfo.js; Implements the bottom row of both pages depending on the type
of the page. Links Order Info, Cart, and Shipping together.
@param properties
*/
function CartBottomRow(props) {
  const navigate = useNavigate();

  return (
    <Row id="bottom-row">
      {props.type === "order" ? (
        <div>
          <Row>
            <Col></Col>
            <Col>
              <h2>Total Order (CAD)</h2>
            </Col>
            <Col>
              <h2>{props.sum}</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                size="lg"
                id="backToCart"
                onClick={() => navigate("../Cart")}
              >
                Back to Cart
              </Button>
            </Col>
            <Col></Col>
            <Col>
              <Button
                size="lg"
                id="procToShip"
                data-testId="procToShip"
                onClick={() => navigate("../Shipping")}
              >
                Proceed to Shipping
              </Button>
            </Col>
          </Row>
        </div>
      ) : (
        <Row>
          <Col>
            <h2>Total Order Price (CAD)</h2>
          </Col>
          <Col></Col>
          <Col>
            <h2>{props.sum}</h2>
          </Col>
          <Col>
            <Button
              size="lg"
              id="checkout"
              onClick={() => navigate("../OrderInfo")}
            >
              Checkout
            </Button>
          </Col>
        </Row>
      )}
    </Row>
  );
}

export default CartBottomRow;
