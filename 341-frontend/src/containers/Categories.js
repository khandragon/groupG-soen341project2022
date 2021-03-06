import React, { useEffect, useState } from "react";
import "../styles/Brands.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { getAllCategories } from "../api/Category-Api";
import { useNavigate } from "react-router-dom";

/*
Function Categories, displays the different categories available as cards, made of products. Does not use written components.
@param properties
*/
function Categories(props) {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  function clickCategory(category) {
    navigate("/Categories/" + category, {
      state: { categoryName: category },
    });
  }

  useEffect(() => {
    getAllCategories().then((res) => {
      setBrands(res);
    });
  }, []);

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
                onClick={() => clickCategory(value)}
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

export default Categories;
