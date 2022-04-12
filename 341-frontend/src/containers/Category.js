import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { getAllProductsByCategories } from "../api/Category-Api";
import { useLocation } from "react-router-dom";

function Category(props) {
  const categoryName = useLocation().state.categoryName;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsByCategories(categoryName).then((res) => {
      const items = res;
      setProducts(items);
    });
  }, [categoryName]);

  return (
    <div>
      <h1 className="personal">
        <u>{categoryName}</u>
      </h1>
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
