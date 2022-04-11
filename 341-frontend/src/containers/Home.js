import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../components/ProductCard";
import "../styles/components/Home.css";
import { getAllProducts } from "../api/Products-Api";

// This function display home page.
function Home(props) {
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
  // useEffect uses getAllProducts to handle data and setInventory to change it

  const [choiceMonth, setChoiceMonth] = useState([
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

  useEffect(() => {
    let isCancelled = false;

    getAllProducts().then((res) => {
      if (isCancelled) return;
      setInventory(res.slice(0, 4));
      setChoiceMonth([
        res[Math.floor(Math.random() * res.length + 1)],
        res[Math.floor(Math.random() * res.length + 1)],
      ]);
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // This return displays all required features including items
  return (
    <div>
      <h3 className="rectangle2">
        Thank You for Shopping Local
        <img
          className="Quebec"
          src="https://cdn.discordapp.com/attachments/933173968683274342/953462886058066020/clipart186698.png"
          alt="Quebec"
          width="400"
          height="240"
        ></img>
      </h3>
      <br></br>
      <h2 className="OurFam">NEW IN OUR FAMILY</h2>
      <br></br>
      <Row xs={1} md={2} className="g-4 card-holder">
        {inventory.map((value) => {
          return (
            <Col key={value.title}>
              <ProductCard
                title={value.title}
                text={value.description}
                header={value.sellerName}
                imgUrl={value.imgUrl}
                isbn={value.isbn}
                cardStyle="homepage"
              ></ProductCard>
            </Col>
          );
        })}
      </Row>
      <br></br>
      <div className="rectangle8">
        <h3>CUSTOMER CHOICE OF THE MONTH</h3>
        <Row xs={1} md={2} className="g-4 card-holder">
          {choiceMonth.map((value) => {
            return (
              <Col key={value.title}>
                <ProductCard
                  title={value.title}
                  text={value.description}
                  header={value.sellerName}
                  imgUrl={value.imgUrl}
                  isbn={value.isbn}
                  cardStyle="homepage"
                ></ProductCard>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default Home;
