import React, { useEffect, useState } from "react";
import "../styles/Inventory.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBarProducts from "../components/Buttons/SearchBarProducts";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../api/Products-Api";
import InventoryPagination from "../components/InventoryPagination";

function Inventory(prods) {
  const [inventory, setInventory] = useState([
    {
      _id: "",
      title: "",
      sellerName: "",
      description: "",
      category: "",
      imgUrl: "",
      Price: 0,
      ShippingCost: "",
      Sale: null,
      isbn: "",
      updatedAt: "",
    },
  ]);

  const [displayInventory, setDisplayInventory] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      const items = res;
      setInventory(items);
      setDisplayInventory(items.slice(0, 8));
      console.log(res);
    });
  }, []);

  var pageNb = Math.ceil(inventory.length / 8.0);

  return (
    <div class="text-truncate">
      <Row xs={3} md={3} id="hash">
        <Col id="title">
          <h1 class="inventory-title">OUR PRODUCTS</h1>
        </Col>
        <Col id="search">
          <SearchBarProducts></SearchBarProducts>
        </Col>
      </Row>
      <Row id="cardsrow" xs={1} md={2} className="g-4 card-holder">
        {displayInventory.map((value) => {
          return (
            <Col>
              <ProductCard
                title={value.title}
                text={value.description}
                header={value.sellerName}
                imgUrl={value.imgUrl}
                isbn={value.isbn}
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
      <InventoryPagination
        size={pageNb}
        inventory={inventory}
        setDisplay={setDisplayInventory}
      ></InventoryPagination>
    </div>
  );
}

export default Inventory;
