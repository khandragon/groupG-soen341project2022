import React, { useEffect, useState } from "react";
import "../styles/Inventory.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBarProducts from "../components/Buttons/SearchBarProducts";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../api/Products-Api";
import InventoryPagination from "../components/InventoryPagination";

/*
Function Sale, shows the inventory of products and displays it in a page. Implements the same components the Inventory.js page
@param properties
*/
function Sale(props) {
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

  const [pageNb, setPageNb] = useState(0);
  const [displayInventory, setDisplayInventory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllProducts().then((res) => {
      const items = res;
      setInventory(items);
      setDisplayInventory(items.slice(0, 8));
      setPageNb(Math.ceil(items.length / 8.0));
    });
  }, []);

  function searchItems() {
    const filteredList = inventory.filter(
      (item) =>
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
    );
    setDisplayInventory(filteredList.slice(0, 8));
    setPageNb(Math.ceil(filteredList.length / 8.0));
  }

  return (
    <div className="text-truncate">
      <Row xs={3} md={3} id="hash">
        <Col id="title">
          <h1 className="inventory-title">OUR PRODUCTS ON SALE</h1>
        </Col>
        <Col id="search">
          <SearchBarProducts
            value={search}
            onType={setSearch}
            onBtnClick={() => searchItems()}
          ></SearchBarProducts>
        </Col>
      </Row>
      <Row id="cardsrow" xs={1} md={2} className="g-4 card-holder">
        {displayInventory.length > 0 ? (
          displayInventory.map((value) => {
            return (
              <Col key={value.title}>
                <ProductCard
                  title={value.title}
                  text={value.description}
                  header={value.sellerName}
                  imgUrl={value.imgUrl}
                  isbn={value.isbn}
                  sale={value.sale}
                ></ProductCard>
              </Col>
            );
          })
        ) : (
          <h3>No Products Found</h3>
        )}
      </Row>
      <InventoryPagination
        size={pageNb}
        inventory={inventory}
        setDisplay={setDisplayInventory}
      ></InventoryPagination>
    </div>
  );
}

export default Sale;
