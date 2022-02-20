import React from "react";
import Card from "react-bootstrap/Card";

function ProductCard(prods) {
    return (
        <Card bg = 'dark' text = 'white' border = 'white'>
            <Card.Img variant = "top" src = {prods.imgUrl} />
            <Card.Body>
                <Card.Title>{prods.title}</Card.Title>
                <Card.Text>{prods.text}</Card.Text>
                <Card.Header>{prods.header}</Card.Header>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;