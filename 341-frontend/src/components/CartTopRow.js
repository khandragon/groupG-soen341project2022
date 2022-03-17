import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/Cart.css";

function CartTopRow(props) {

    const cartArr = ["Name", "ID", "Quantity", "Unit Price", ""];

    return (
        <Row class = "top-row">
            {cartArr.map((value) => {
                return (
                    <Col>
                        <h2 class = "column-titles">{value}</h2>
                    </Col>
                );
            })}
        </Row>
    );
}

export default CartTopRow;