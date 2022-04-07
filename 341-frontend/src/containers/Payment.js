import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/Payment.css";
import Form from "react-bootstrap/Form";

function Payment(props) {
  const paymentArr = [
    "Credit Card Holder Name",
    "Card Number",
    "Expiration Date (MM/YY)",
    "CVV",
  ];

  return (
    <div>
      <Row>
        <Col>
          <h1 className="personal">Payment Information</h1>
        </Col>
      </Row>
      <hr />
      {paymentArr.map((value) => {
        return (
          <Row className="infoRow">
            <Col className="infoCol">
              <h4 className="paymentInfo">{value}</h4>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="contactForm">
                  <Form.Control className="form2" size="lg" type="text-area" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        );
      })}
      <Row>
        <h3 id="msgErr" hidden>
          ERROR: PLEASE DOUBLE CHECK THE FIELDS FOR MISSING OR WRONG INFORMATION
        </h3>
      </Row>
      <Row id="btnRow">
        <Col>
          <Button id="back">Back</Button>
        </Col>
        <Col></Col>
        <Col>
          <Button id="place">Place the Order</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Payment;
