import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Inventory.css";

function ProductCard(prods) {
  return (
    <Card className="card-color" border="white">
      <Card.Img variant="top" src={prods.imgUrl} />
      <Card.Body>
        <Card.Title>{prods.title}</Card.Title>
        <Card.Text>{prods.text}</Card.Text>
        <Card.Header>{prods.header}</Card.Header>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
