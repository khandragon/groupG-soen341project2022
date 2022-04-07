import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/ContactUs.css";

function ContactUs(prods) {
  return (
    <div>
      <Row>
        <Col>
          <h1 class="contact-title">Contact Us</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p class="contact-paragraph">
            Please let us know how we can help you today and we will get back
          </p>
          <p class="contact-paragraph">to you as soon as possible!</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Form>
          <Form.Group controlId="contactForm">
            <Form.Control
              size="lg"
              type="text-area"
              placeholder="Describe your issue here..."
            />
          </Form.Group>
        </Form>
      </Row>
      <hr />
      <Row>
        <p class="email-help">Enter the email where we could reach you.</p>
        <Form>
          <Form.Group controlID="emailForm">
            <Form.Control size="lg" type="text" />
          </Form.Group>
        </Form>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col>
          <Button id="sendBtn">Send</Button>
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
