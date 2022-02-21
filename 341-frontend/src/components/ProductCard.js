import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Inventory.css";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();

  function clickItem(e) {
    navigate("/Product/" + props.isbn);
  }

  return (
    <Card
      className="card-color"
      border="white"
      tag="a"
      style={{ cursor: "pointer" }}
      onClick={clickItem}
    >
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Header>{props.header}</Card.Header>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
