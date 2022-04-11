import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { getAllProductsByCategories } from "../api/Category-Api";

function Category(props) {
  const category = window.location.href.split("/").pop();

  console.log(category);
  const [products, setCategory] = useState([]);

  useEffect(() => {
    getAllProductsByCategories(category).then((res) => {
      const items = res;
      setCategory(items);
    });
  });

  return (
    <div>
      <Row id="cardsrow" xs={1} md={2} className="g-4 card-holder">
        {products.length > 0 ? (
          products.map((value) => {
            return (
              <Col key={value.title}>
                <ProductCard
                  title={value.title}
                  text={value.description}
                  header={value.sellerName}
                  imgUrl={value.imgUrl}
                  isbn={value.isbn}
                ></ProductCard>
              </Col>
            );
          })
        ) : (
          <h3>No Products Found</h3>
        )}
      </Row>
    </div>
  );
}

export default Category;
