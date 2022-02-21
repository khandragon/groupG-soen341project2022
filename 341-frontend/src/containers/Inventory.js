import React from "react";
import "../styles/Inventory.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBarProducts from "../components/Buttons/SearchBarProducts";
import ProductCard from "../components/ProductCard";
import Pagination from "react-bootstrap/Pagination";

function Inventory(prods) {
  var test = {
    title: "To Kill a Mockingbird",
    sellerName: "Harper Lee",
    description:
      "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.\n\nCompassionate, dramatic, and dee",
    category: "Historical Fiction",
    imgUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
  };

  const arr = [test, test, test, test, test, test, test, test];

  return (
    <div>
      <Row xs={3} md={3} id="hash">
        <Col id="title">
          <h1>OUR PRODUCTS</h1>
        </Col>
        <Col id="search">
          <SearchBarProducts></SearchBarProducts>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4 card-holder">
        {arr.map((value) => {
          return (
            <Col>
              <ProductCard
                title={value.title}
                text={value.description}
                header={value.sellerName}
                imgUrl={value.imgUrl}
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
      <Pagination size="lg">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{18}</Pagination.Item>
        <Pagination.Item>{19}</Pagination.Item>
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default Inventory;
