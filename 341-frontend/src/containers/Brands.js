import React, { useEffect, useState } from "react";
import "../styles/Brands.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Brands(props) {
  const brands = [
    "Historical Fiction",
    "Biography",
    "Fantasy",
    "Science Fiction",
    "Adventure",
    "Literature",
    "Young Adult",
    "Academic",
    "Dystopia",
    "Health",
    "Childrens",
    "True Crime",
    "Classics",
    "Politics",
    "Cultural",
    "Mystery",
    "Spirituality",
    "Gothic",
    "Fiction",
    "Historical",
    "Novels",
    "Electronics",
    "Sports",
    "Toys and Games",
    "Kitchen and Dining",
  ];

  return (
    <div>
      <Row xs={1} md={2} className="g-4 card-holder">
        {brands.map((value) => {
          return (
            <Col>
              <Card
                id={value}
                className="brand-card"
                border="red"
                tag="a"
                style={{ cursor: "pointer" }}
                // onClick=
              >
                <Card.Body>
                  <Card.Title>{value}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Brands;
