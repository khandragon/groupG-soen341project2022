import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Inventory from "./Inventory";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBarProducts from "../components/Buttons/SearchBarProducts";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import "../styles/components/Home.css";
import { getAllProducts } from "../api/Products-Api";

function Home(props) {
  const navigate = useNavigate();
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
  var test = {};
  useEffect(() => {
    getAllProducts().then((res) => {
      setInventory(res);
      console.log(res);
    });
  }, []);

  const inventoryItems = [test, test, test, test];

  function onButtonClick() {
    navigate("/about");
  }

  return (
    <div>
      {/* <p>Hello Users</p>
      <Button onClick={onButtonClick}>Click</Button> */}

      <h3 className="rectangle2">
        Thank You for Shopping Local{" "}
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
        {inventoryItems.map((value) => {
          return (
            <Col>
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
      <h3 className="rectangle8">
        CUSTOMER CHOICE OF THE MONTH <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </h3>
    </div>
  );
}

export default Home;
