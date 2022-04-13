import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Inventory.css";
import { useNavigate } from "react-router-dom";

/*
Function ProductCard implemented in Home.js, Sale.js, and Inventory.js; displays the multiple products available as cards
with proper attributes title, text, header, and image. 
@param properties
*/
function ProductCard(props) {
  const navigate = useNavigate();

  function clickItem(e) {
    navigate("/Products/" + props.isbn);
  }

  return props.cardStyle === "homepage" ? (
    <Card
      className="card-color"
      border="red"
      tag="a"
      style={{ cursor: "pointer" }}
      onClick={clickItem}
      data-testid={"ProductCard-" + props.index}
    >
      <Card.Img variant="top" src={props.imgUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Card.Header>{props.header}</Card.Header>
        <Card.Footer>{props.sale}</Card.Footer>
      </Card.Body>
    </Card>
  ) : (
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
        <Card.Footer>{props.sale}</Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
